import { DemonRecord } from "./record";
import { BasePlayer } from "./player";

/**
 * When embedded into other objects, the minimal representation of each demon is provided.
 */
export interface BaseDemon {
    id: number;
    name: string;
    position: number;
}

/**
 * When retrieving demons via `Pointercrate#getDemons`, the partial representation of each demon is provided.
 */
export interface Demon extends BaseDemon {
    requirement: number;
    publisher: BasePlayer;
    verifier: BasePlayer;
    video: string;
    level_id: number;
}

/**
 * The listed record objects do not contain the current demon embedded into the `demon` field.
 */
export interface ExtendedDemon extends Demon {
    creators: BasePlayer[];
    records: DemonRecord[];
}