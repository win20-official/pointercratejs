import fetch = require("node-fetch");
import { ResponseBody } from "../interfaces/misc";
import { SendRequestOptions } from "../types/options";

/**
 * The base of the Pointercrate class. Used to send requests to the Pointercrate API.
 */
class BasePointercrate {
    /**
     * A url string specifing what API to send requests to.
     */
    api: string;

    /**
     * @param api An optional url string specifing what API to send requests to.
     */
    constructor(api: string = "https://pointercrate.com/api") {
        this.api = api;
    }

    /**
     * A function to send requests to the Pointercrate API.
     * @param path The path to the endpoint of the request.
     * @param options Options to send into the request, if specified.
     * @returns A response, containing a `body`, and `headers`.
     */
    async sendRequest(path: string, options: SendRequestOptions = { method: "GET", headers: {}, body: {} }) {
        options.method = options.method ? options.method.toUpperCase() : "GET";
        options.headers = options.headers || {};
        options.body = options.body || {};

        let url = this.api + path;
        let init: any;

        if (options.method == "GET" || options.method == "HEAD") {
            if (!Object.is(options.body, {}))
                url += "/?" + new URLSearchParams(options.body).toString();
            
            init = {
                headers: options.headers
            }
        } else {
            init.method = options.method;
            init.headers = {
                ...init.headers,
                "Content-Type": "application/json"
            }
            init.body = options.body;
        }

        let response = await fetch.default(url, init);

        let body: any;
        if ((await response.text()).length > 0)
            body = await response.json();
        else
            body = {};
        
        let headers = {};

        if (body.hasOwnProperty("message"))
            throw new Error(body.message);

        for (let header of response.headers.keys()) {
            headers[header] = response.headers.get(header);
        }

        return {
            body,
            headers
        } as ResponseBody<any>;
    }
}

export = BasePointercrate;