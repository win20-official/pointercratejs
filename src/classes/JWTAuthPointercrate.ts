import { ExtendedPlayer } from "../interfaces/player";
import { ExtendedDemon } from "../interfaces/demon";
import { MatchHeaders, MatchOptionalHeaders } from "../types/headers";
import { Tagged, ResponseBody, User } from "../interfaces/misc";
import { AddCreatorOptions, AddDemonOptions, AddRecordNoteOptions, ModifyDemonOptions, ModifyPlayerOptions, ModifyRecordNoteOptions, ModifyRecordOptions, ModifySubmitterOptions, ModifyUserOptions, SearchSubmitterOptions, SearchUserOptions } from "../types/options";
import { ExtendedRecord, RecordNote, Submitter } from "../interfaces/record";
import BaseAuthPointercrate = require("./BaseAuthPointercrate");
import Endpoints = require("./Endpoints");

/**
 * Pointercrate authentication class. Type: JSON Web.
 */
class JWTAuthPointercrate extends BaseAuthPointercrate {
    /**
     * @param token The authentication token required.
     * @param api An optional url string specifing what API to send requests to.
     */
    constructor(token: string, api: string = "https://pointercrate.com/api") {
        super(token, "Bearer", api);
    }

    /**
     * Gets information about the currently logged in account (that is, the account whose access token is sent).
     * @param headers Headers to send to the Pointercrate API.
     * @returns A user object representing the account you just logged into.
     */
    async getAccount(headers: MatchOptionalHeaders = {}) {
        return this.sendAuthRequest(Endpoints.meAuth(), { headers }) as Promise<ResponseBody<Tagged<User>>>;
    }

    /**
     * Allows the retrieval of a list of all pointercrate users (if you are pointercrate staff), or a list of all users that fall under your juristiction as a team leader.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @returns A list of users.
     */
    async getUsers(options: SearchUserOptions = {}) {
        return this.sendAuthRequest(Endpoints.users(), { body: options }) as Promise<ResponseBody<User[]>>;
    }

    /**
     * Retrieves detailed information about the user with the given `id`.
     * @param id A numeric id that represents a user.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The requested user object.
     */
    async getUser(id: number | string, headers: MatchOptionalHeaders = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        return this.sendAuthRequest(Endpoints.users(id), { headers }) as Promise<ResponseBody<Tagged<User>>>;
    }

    /**
     * Modifies a given user.
     * @param id A numeric id that represents a user.
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated user object.
     */
    async patchUser(id: number | string, headers: MatchHeaders, options: ModifyUserOptions = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.users(id), { method: "PATCH", body: options, headers }) as Promise<ResponseBody<Tagged<User>>>;
    }

    /**
     * Deletes a user account. This action is irreversible!
     * @param id A numeric id that represents a user.
     * @param headers Headers to send to the Pointercrate API.
     * @returns Nothing
     */
    async deleteUser(id: number | string, headers: MatchHeaders) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.users(id), { method: "DELETE", headers }) as Promise<ResponseBody<any>>;
    }
    
    /**
     * Adds a demon to the demonlist.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The newly created demon object.
     */
    async postDemon(options: AddDemonOptions) {
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");
        
        return this.sendAuthRequest(Endpoints.demons(), { method: "POST", body: options }) as Promise<ResponseBody<Tagged<ExtendedDemon>>>;
    }

    /**
     * Modifies a given demon.
     * @param id A numeric id that represents a demon.
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated demon object.
     */
    async patchDemon(id: number | string, headers: MatchHeaders, options: ModifyDemonOptions = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.demons(id), { method: "PATCH", body: options, headers }) as Promise<ResponseBody<Tagged<ExtendedDemon>>>;
    }

    /**
     * Adds a creator the creator list of the demon with the given `demonId`.
     * @param demonId A numeric id that represents a demon.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns Nothing
     */
    async postCreator(demonId: number | string, options: AddCreatorOptions) {
        if (isNaN(Number(demonId)))
            throw new TypeError("Parameter demonId is not a number");
        
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");
        
        return this.sendAuthRequest(Endpoints.demonCreators(demonId), { method: "POST", body: options }) as Promise<ResponseBody<any>>;
    }

    /**
     * Removes the specified player from the creator list of the demon with the given `demonId`.
     * @param demonId A numeric id that represents a demon.
     * @param creatorId A numeric id that represents a player.
     * @returns Nothing
     */
    async deleteCreator(demonId: number | string, creatorId: number | string) {
        if (isNaN(Number(demonId)))
            throw new TypeError("Parameter demonId is not a number");

        if (isNaN(Number(creatorId)))
            throw new TypeError("Parameter creatorId is not a number");

        return this.sendAuthRequest(Endpoints.demonCreators(demonId, creatorId), { method: "DELETE" }) as Promise<ResponseBody<any>>;
    }

    /**
     * Modifies a given player.
     * @param id A numeric id that represents a player.
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated player object.
     */
    async patchPlayer(id: number | string, headers: MatchHeaders, options: ModifyPlayerOptions = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.players(id), { method: "PATCH", body: options, headers }) as Promise<ResponseBody<Tagged<ExtendedPlayer>>>;
    }

    /**
     * Modifies a given record.
     * @param id A numeric id that represents a record.
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated record object.
     */
    async patchRecord(id: number | string, headers: MatchHeaders, options: ModifyRecordOptions = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.records(id), { method: "PATCH", body: options, headers }) as Promise<ResponseBody<Tagged<ExtendedRecord>>>;
    }

    /**
     * Deletes the record with the given `id`.
     * @param id A numeric id that represents a record.
     * @param headers Headers to send to the Pointercrate API.
     * @returns Nothing
     */
    async deleteRecord(id: number | string, headers: MatchHeaders) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.records(id), { method: "DELETE", headers }) as Promise<ResponseBody<any>>;
    }

    /**
     * Adds a note to the specified record.
     * @param recordId A numeric id that represents a record.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The newly created record note object.
     */
    async postRecordNote(recordId: number | string, options: AddRecordNoteOptions) {
        if (isNaN(Number(recordId)))
            throw new TypeError("Parameter recordId is not a number");
        
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");
        
        return this.sendAuthRequest(Endpoints.recordNotes(recordId), { method: "POST", body: options }) as Promise<ResponseBody<Tagged<RecordNote>>>;
    }

    /**
     * Modifies the specified note's content.
     * @param recordId A numeric id that represents a record.
     * @param noteId A numeric id that represents a record note.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated record note object.
     */
    async patchRecordNote(recordId: number | string, noteId: number | string, options: ModifyRecordNoteOptions) {
        if (isNaN(Number(recordId)))
            throw new TypeError("Parameter recordId is not a number");

        if (isNaN(Number(noteId)))
            throw new TypeError("Parameter creatorId is not a number");
        
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");

        return this.sendAuthRequest(Endpoints.demonCreators(recordId, noteId), { method: "PATCH", body: options }) as Promise<ResponseBody<Tagged<RecordNote>>>;
    }

    /**
     * Deletes the specified note.
     * @param recordId A numeric id that represents a record.
     * @param noteId A numeric id that represents a record note.
     * @returns Nothing
     */
    async deleteRecordNote(recordId: number | string, noteId: number | string) {
        if (isNaN(Number(recordId)))
            throw new TypeError("Parameter recordId is not a number");

        if (isNaN(Number(noteId)))
            throw new TypeError("Parameter creatorId is not a number");

        return this.sendAuthRequest(Endpoints.recordNotes(recordId, noteId), { method: "DELETE" }) as Promise<ResponseBody<any>>;
    }

    /**
     * @param options Options to send as query parameters to the Pointercrate API.
     * @returns A list of submitters.
     */
    async getSubmitters(options: SearchSubmitterOptions = {}) {
        return this.sendAuthRequest(Endpoints.submitters(), { body: options }) as Promise<ResponseBody<Submitter[]>>;
    }

    /**
     * @param id A numeric id that represents a submitter.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The requested submitter object.
     */
    async getSubmitter(id: number | string, headers: MatchOptionalHeaders = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        return this.sendAuthRequest(Endpoints.submitters(id), { headers }) as Promise<ResponseBody<Tagged<Submitter>>>;
    }

    /**
     * @param id A numeric id that represents a submitter.
     * @param headers Headers to send to the Pointercrate API.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @returns The updated submitter object.
     */
    async patchSubmitter(id: number | string, headers: MatchHeaders, options: ModifySubmitterOptions = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");
        
        if (typeof headers != "object")
            throw new TypeError("Parameter headers is not an object");

        return this.sendAuthRequest(Endpoints.submitters(id), { method: "PATCH", body: options, headers }) as Promise<ResponseBody<Tagged<Submitter>>>;
    }
}

export = JWTAuthPointercrate;