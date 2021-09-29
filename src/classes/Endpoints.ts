/**
 * Collection of endpoints listed as functions.
 */
class Endpoints {
    /**
     * @returns /v1/auth/register
     */
    static registerAuth() { return "/v1/auth/register" }
    /**
     * @returns /v1/auth
     */
    static auth() { return "/v1/auth" }
    /**
     * @returns /v1/auth/invalidate
     */
    static invalidateAuth() { return "/v1/auth/invalidate" }
    /**
     * @returns /v1/auth/me
     */
    static meAuth() { return "/v1/auth/me" }
    /**
     * @returns /v1/users/[id]
     */
    static users(id?: number | string) { return "/v1/users" + (id ? "/" + id : "") }
    /**
     * @returns /v2/demons/[id]
     */
    static demons(id?: number | string) { return "/v2/demons" + (id ? "/" + id : "") }
    /**
     * @returns /v2/demons/listed
     */
    static listedDemons() { return "/v2/demons/listed" }
    /**
     * @returns /v2/demons/\<demonId\>/creators/[creatorId]
     */
    static demonCreators(demonId: number | string, creatorId?: number | string) { return "/v2/demons/" + demonId + "/creators" + (creatorId ? "/" + creatorId : "") }
    /**
     * @returns /v1/players/[id]
     */
    static players(id?: number | string) { return "/v1/players" + (id ? "/" + id : "") }
    /**
     * @returns /v1/players/ranking
     */
    static playerRanking() { return "/v1/players/ranking" }
    /**
     * @returns /v1/records/[id]
     */
    static records(id?: number | string) { return "/v1/records" + (id ? "/" + id : "") }
    /**
     * @returns /v1/records/\<recordId\>/notes/[noteId]
     */
    static recordNotes(recordId: number | string, noteId?: number | string) { return "/v1/records/" + recordId + "/notes" + (noteId ? "/" + noteId : "") }
    /**
     * @returns /v1/submitters/[id]
     */
    static submitters(id?: number | string) { return "/v1/submitters" + (id ? "/" + id : "") }
    /**
     * @returns /v1/nationalities/\<code\>
     */
    static nationalities(code: string) { return "/v1/nationalities/" + code }
    /**
     * @returns /v1/nationalities/ranking
     */
    static nationalityRanking() { return "/v1/nationalities/ranking" }
    /**
     * @returns /v1/nationalities/\<code\>/subdivisions
     */
    static nationalitySubdivisions(code: string) { return "/v1/nationalities/" + code + "/subdivisions" }
    /**
     * @returns /v1/list_information
     */
    static listInformation() { return "/v1/list_information" }
}

export = Endpoints;