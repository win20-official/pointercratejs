import { BaseDemon } from "./demon";

/**
 * An object representing some nation.
 */
export interface Nationality {
    country_code: string;
    nation: string;
}

export interface SubdivisionNationality extends Nationality {
    subdivision: Subdivision;
}

export interface Subdivision {
    iso_code: string;
    name: string;
}

export interface BaseNationalityDemon {
    id: number;
    demon: string;
    position: number;
}

export interface NationalityDemonPlayer extends BaseNationalityDemon {
    player: string;
}

export interface NationalityDemonPlayers extends BaseNationalityDemon {
    players: string[];
}

export interface NationPlayerRecord extends NationalityDemonPlayers {
    progress: number;
}

export interface NationalityRecord {
    nationality: Nationality;
    created: NationalityDemonPlayers[];
    verified: NationalityDemonPlayer[];
    records: NationPlayerRecord[];
    unbeaten: BaseDemon[];
}

export interface RankedNation extends Nationality {
    rank: number;
    score: number;
}