import { MatchHeaders } from "../types/headers";
import { Tagged, ResponseBody, User, TaggedUser } from "../interfaces/misc";
import { ModifyAccountOptions } from "../types/options";
import BaseAuthPointercrate = require("./BaseAuthPointercrate");
import Endpoints = require("./Endpoints");

/**
 * Pointercrate authentication class. Type: Basic.
 */
class BasicAuthPointercrate extends BaseAuthPointercrate {
    /**
     * @param token The authentication token required.
     * @param api An optional url string specifing what API to send requests to.
     */
    constructor(token: string, api: string = "https://pointercrate.com/api") {
        super(token, "Basic", api);
    }

    /**
     * Logs into an existing pointercrate user account, providing an acccess token upon success.
     * @returns A user object representing the account you just logged into, and your access token to use when performing requests to the Pointercrate API.
     */
    async loginAccount() {
        return this.sendAuthRequest(Endpoints.auth(), { method: "POST" }) as Promise<ResponseBody<TaggedUser>>;
    }

    /**
     * Invalidates all access tokens to your account.
     * @returns Nothing
     */
    async invalidateTokens() {
        return this.sendAuthRequest(Endpoints.invalidateAuth(), { method: "POST" }) as Promise<ResponseBody<any>>;
    }
    
    /**
     * Modifies the currently logged in account (that is, the account whose credentials are sent).
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns A user object representing the account you just logged into.
     */
    async patchAccount(headers: MatchHeaders, options: ModifyAccountOptions = {}) {
        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");
        
        return this.sendAuthRequest(Endpoints.meAuth(), { method: "PATCH", body: options }) as Promise<ResponseBody<Tagged<User>>>;
    }

    /**
     * Deletes your pointercrate account. Note that this action is irreversible!
     * @param headers Headers to send to the Pointercrate API.
     * @returns Nothing
     */
    async deleteAccount(headers: MatchHeaders) {
        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");
        
        return this.sendAuthRequest(Endpoints.meAuth(), { method: "DELETE" }) as Promise<ResponseBody<any>>;
    }
}

export = BasicAuthPointercrate;