import Pointercrate = require("./Pointercrate");
import { SendRequestOptions } from "../types/options";

/**
 * The base of the authentication classes. This requires an authentication token to access its endpoints.
 */
class BaseAuthPointercrate extends Pointercrate {
    /**
     * The authentication token required.
     */
    token: string;
    /**
     * The authentication type used.
     */
    type: string;
    
    /**
     * @param token The authentication token required.
     * @param type The authentication type used.
     * @param api An optional url string specifing what API to send requests to.
     */
    constructor(token: string, type: "Basic" | "Bearer", api: string = "https://pointercrate.com/api") {
        super(api);

        this.token = token;
        this.type = type;
    }

    /**
     * A function to send authenticated requests to the Pointercrate API.
     * @param path The path to the endpoint of the request.
     * @param options Options to send into the request, if specified.
     * @returns A response, containing a `body`, and `headers`.
     */
    async sendAuthRequest(path: string, options: SendRequestOptions = { method: "GET", headers: {}, body: {} }) {
        return this.sendRequest(this.api + path, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: this.type + " " + this.token
            }
        });
    }
}

export = BaseAuthPointercrate;