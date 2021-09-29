export type MatchHeaders = {
    "If-Match": string;
}

export type MatchOptionalHeaders = {
    "If-Match"?: string;
    "If-None-Match"?: string;
}

export type OptionalAuthHeaders = {
    Authorization?: string;
}