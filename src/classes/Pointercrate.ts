import { CreateAccountOptions, SearchDemonOptions, SearchNationRankingOptions, SearchPlayerOptions, SearchPlayerRankingOptions, SearchRecordOptions, SubmitRecordOptions } from "../types/options";
import { Demon, ExtendedDemon } from "../interfaces/demon";
import { ExtendedPlayer, Player, RankedPlayer } from "../interfaces/player";
import { ExtendedRecord, Record } from "../interfaces/record";
import { Tagged, ListMetadata, ResponseBody, User } from "../interfaces/misc";
import { MatchOptionalHeaders, OptionalAuthHeaders } from "../types/headers";
import { NationalityRecord, RankedNation, Subdivision } from "../interfaces/nationality";
import BasePointercrate = require("./BasePointercrate");
import Endpoints = require("./Endpoints");

/**
 * The flagship class of the library. Contains function wrappers for API endpoints.
 */
class Pointercrate extends BasePointercrate {
    /**
     * Registers a new pointercrate account.
     * @param options Options to send as a JSON to the Pointercrate API. 
     * @returns A user object representing your newly registered account.
     */
    async createAccount(options: CreateAccountOptions) {
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");
        
        return this.sendRequest(Endpoints.registerAuth(), { method: "POST", body: options }) as Promise<ResponseBody<Tagged<User>>>;
    }

    /**
     * Retrieves a, potentially filtered, list of every demon in the Pointercrate database, sorted by `id`.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @returns A list of demons.
     */
    async getDemons(options: SearchDemonOptions = {}) {
        return this.sendRequest(Endpoints.demons(), { body: options }) as Promise<ResponseBody<Demon[]>>;
    }

    /**
     * Retrieves a, potentially filtered, list of only the demons currently placed on the demonlist, sorted by `position`.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @returns A list of demons.
     */
    async getListedDemons(options: SearchDemonOptions = {}) {
        return this.sendRequest(Endpoints.listedDemons(), { body: options }) as Promise<ResponseBody<Demon[]>>;
    }

    /**
     * Retrieves detailed information about the demon with the given `id`.
     * @param id A numeric id that represents a demon.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The requested demon object.
     */
    async getDemon(id: number | string, headers: MatchOptionalHeaders = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");

        return this.sendRequest(Endpoints.demons(id), { headers }) as Promise<ResponseBody<Tagged<ExtendedDemon>>>;
    }

    /**
     * Allows to retrieve a potentially filtered list of all players having records on the list, or are associated with a demon in some other way.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @param headers Headers to send to the Pointercrate API.
     * @returns A list of players.
     */
    async getPlayers(options: SearchPlayerOptions = {}, headers: OptionalAuthHeaders = {}) {
        return this.sendRequest(Endpoints.players(), { body: options, headers }) as Promise<ResponseBody<Player[]>>;
    }

    /**
     * This is a more limited (and slower) version of `Pointercrate#getPlayers`. It should only be used if the additional information (player scores and ranking) is actually required.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @returns A list of players.
     */
    async getPlayerRanking(options: SearchPlayerRankingOptions = {}) {
        return this.sendRequest(Endpoints.playerRanking(), { body: options }) as Promise<ResponseBody<RankedPlayer[]>>;
    }

    /**
     * Retrieves detailed information about the player with the given `id`.
     * @param id A numeric id that represents a player.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The requested player object.
     */
    async getPlayer(id: number | string, headers: MatchOptionalHeaders = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");
        if (id < 0)
            id = -id;

        return this.sendRequest(Endpoints.players(id), { headers }) as Promise<ResponseBody<Tagged<ExtendedPlayer>>>;
    }

    /**
     * Allows to retrieve a list of records.
     * @param options Options to send as query parameters to the Pointercrate API.
     * @param headers Headers to send to the Pointercrate API.
     * @returns A list of records.
     */
    async getRecords(options: SearchRecordOptions = {}, headers: OptionalAuthHeaders = {}) {
        return this.sendRequest(Endpoints.records(), { body: options, headers }) as Promise<ResponseBody<Record[]>>;
    }

    /**
     * Either adds a record directly to the list, or submits a record to the list mods for approval. The record must meet the demons requirement, and the holder in question needn't be banned.
     * @param options Options to send as a JSON to the Pointercrate API.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The newly created record object.
     */
    async postRecord(options: SubmitRecordOptions, headers: OptionalAuthHeaders = {}) {
        if (typeof options != "object")
            throw new TypeError("Parameter options is not an object");
        
        return this.sendRequest(Endpoints.records(), { method: "POST", body: options, headers }) as Promise<ResponseBody<Tagged<ExtendedRecord>>>;
    }

    /**
     * Retrieves detailed information about the record with the given `id`.
     * @param id A numeric id that represents a record.
     * @param headers Headers to send to the Pointercrate API.
     * @returns The requested record object.
     */
    async getRecord(id: number | string, headers: MatchOptionalHeaders & OptionalAuthHeaders = {}) {
        if (isNaN(Number(id)))
            throw new TypeError("Parameter id is not a number");
        if (id < 0)
            id = -id;

        return this.sendRequest(Endpoints.records(id), { headers }) as Promise<ResponseBody<Tagged<ExtendedRecord>>>;
    }

    /**
     * @param code A two-letter country code that represents a nation.
     */
    async getNationality(code: string) {
        if (typeof code != "string")
            throw new TypeError("Parameter code is not a string");
        
        return this.sendRequest(Endpoints.nationalities(code)) as Promise<ResponseBody<Tagged<NationalityRecord>>>;
    }

    /**
     * @param options Options to send as query parameters to the Pointercrate API.
     */
    async getNationalityRanking(options: SearchNationRankingOptions = {}) {
        return this.sendRequest(Endpoints.nationalityRanking(), { body: options }) as Promise<ResponseBody<Tagged<RankedNation>>>;
    }

    /**
     * @param code A two-letter country code that represents a nation.
     */
    async getNationalitySubdivisions(code: string) {
        if (typeof code != "string")
            throw new TypeError("Parameter code is not a string");
        
        return this.sendRequest(Endpoints.nationalitySubdivisions(code)) as Promise<ResponseBody<Subdivision[]>>;
    }

    async getListMetadata() {
        return this.sendRequest(Endpoints.listInformation()) as Promise<ResponseBody<ListMetadata>>;
    }
}

export = Pointercrate;