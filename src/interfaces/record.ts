import { BaseDemon } from "./demon";
import { BasePlayer } from "./player";

/**
 * The minimal form of record objects is returned if a record object is part of another object.
 */
export interface BaseRecord {
    id: number;
    progress: number;
    status: string;
    video: string;
}

/**
 * Returned in a demon object.
 */
export interface DemonRecord extends BaseRecord {
    player: BasePlayer;
}

/**
 * Returned in a player object.
 */
export interface PlayerRecord extends BaseRecord {
    demon: BaseDemon;
}

/**
 * The listed form of record objects is returned by `Pointercrate#getRecords`.
 */
export interface Record extends BaseRecord {
    player: BasePlayer;
    demon: BaseDemon;
}

/**
 * The full form of record objects is returned by `Pointercrate#getRecord`.
 */
export interface ExtendedRecord extends Record {
    notes: RecordNote[];
    submitter: Submitter;
}

/**
 * Each record can have an arbitrary amount of notes, and each note keeps track of who created and subsequently edited it.
 */
export interface RecordNote {
    id: number;
    author: string;
    content: string;
    editors: string[];
    transferred: boolean;
}

/**
 * Everyone who submits a record gets assigned an incremental submitter id, internally used to keep track of who has been banned from submitting records.
 */
export interface Submitter {
    id: number;
    banned: boolean;
}