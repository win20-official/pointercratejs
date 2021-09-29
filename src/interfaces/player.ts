import { PlayerRecord } from "./record";
import { BaseDemon } from "./demon";
import { Nationality, SubdivisionNationality } from "./nationality";

/**
 * When part of the representation of another object, the minimal representation of a player is provided.
 */
export interface BasePlayer {
    id: number;
    name: string;
    banned: boolean;
}

/**
 * This representation of a player is provided when using `Pointercrate#getPlayers`.
 */
export interface Player extends BasePlayer {
    nationality: Nationality;
}

/**
 * This representation of a player is provided when using `Pointercrate#getPlayerRanking`.
 */
export interface RankedPlayer extends Player {
    rank: number;
    score: number;
}

/**
 * The listed record objects do not contain the current player embedded into the `player` field.
 */
export interface ExtendedPlayer extends Player {
    nationality: SubdivisionNationality;
    created: BaseDemon[];
    records: PlayerRecord[];
    published: BaseDemon[];
    verified: BaseDemon[];
}