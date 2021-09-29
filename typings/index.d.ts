declare module "pointercrate" {
    export type AddCreatorOptions = {
        creator: string;
    }
    
    export type AddDemonOptions = {
        name: string;
        position: number;
        requirement: number;
        verifier: string;
        publisher: string;
        creators: string[];
        video?: string;
    }
    
    export type AddRecordNoteOptions = {
        content: string;
    }
    
    export class BaseAuthPointercrate extends Pointercrate {
        public constructor(token: string, type: "Basic" | "Bearer", api?: string);
    
        public token: string;
        public type: string;
    
        public sendAuthRequest(path: string, options?: SendRequestOptions): Promise<ResponseBody<any>>;
    }
    
    export interface BaseDemon {
        id: number;
        name: string;
        position: number;
    }
    
    export interface BaseNationalityDemon {
        id: number;
        demon: string;
        position: number;
    }
    
    export interface BasePlayer {
        id: number;
        name: string;
        banned: boolean;
    }
    
    export class BasePointercrate {
        public constructor(api?: string);
    
        public api: string;
    
        public sendRequest(path: string, options?: SendRequestOptions): Promise<ResponseBody<any>>;
    }
    
    export interface BaseRecord {
        id: number;
        progress: number;
        status: string;
        video: string;
    }
    
    export class BasicAuthPointercrate extends BaseAuthPointercrate {
        public constructor(token: string, api?: string);
        
        public loginAccount(): Promise<ResponseBody<TaggedUser>>;
        public invalidateTokens(): Promise<ResponseBody<any>>;
        public patchAccount(headers: MatchHeaders, options?: ModifyAccountOptions): Promise<ResponseBody<Tagged<User>>>;
        public deleteAccount(headers: MatchHeaders): Promise<ResponseBody<any>>;
    }
    
    export type CreateAccountOptions = {
        name: string;
        password: string;
    }
    
    export interface Demon extends BaseDemon {
        requirement: number;
        publisher: BasePlayer;
        verifier: BasePlayer;
        video: string;
        level_id: number;
    }
    
    export interface DemonRecord extends BaseRecord {
        player: BasePlayer;
    }
    
    export class Endpoints {
        public static registerAuth(): string;
        public static auth(): string;
        public static invalidateAuth(): string;
        public static meAuth(): string;
        public static users(id?: number | string): string;
        public static demons(id?: number | string): string;
        public static listedDemons(): string;
        public static demonCreators(demonId: number | string, creatorId?: number | string): string;
        public static players(id?: number | string): string;
        public static playerRanking(): string;
        public static records(id?: number | string): string;
        public static recordNotes(recordId: number | string, noteId?: number | string): string;
        public static submitters(id?: number | string): string;
        public static nationalities(code: string): string;
        public static nationalityRanking(): string;
        public static nationalitySubdivisions(code: string): string;
        public static listInformation(): string;
    }
    
    export interface ExtendedDemon extends Demon {
        creators: BasePlayer[];
        records: DemonRecord[];
    }
    
    export interface ExtendedPlayer extends Player {
        nationality: SubdivisionNationality;
        created: BaseDemon[];
        records: PlayerRecord[];
        published: BaseDemon[];
        verified: BaseDemon[];
    }
    
    export interface ExtendedRecord extends Record {
        notes: RecordNote[];
        submitter: Submitter;
    }
    
    export class JWTAuthPointercrate extends BaseAuthPointercrate {
        public constructor(token: string, api?: string);
    
        public getAccount(headers?: MatchOptionalHeaders): Promise<ResponseBody<Tagged<User>>>;
        public getUsers(options?: SearchUserOptions): Promise<ResponseBody<User[]>>;
        public getUser(id: number | string, headers?: MatchOptionalHeaders): Promise<ResponseBody<Tagged<User>>>;
        public patchUser(id: number | string, headers: MatchHeaders, options?: ModifyUserOptions): Promise<ResponseBody<Tagged<User>>>;
        public deleteUser(id: number | string, headers: MatchHeaders): Promise<ResponseBody<any>>;
        public postDemon(options: AddDemonOptions): Promise<ResponseBody<Tagged<ExtendedDemon>>>;
        public patchDemon(id: number | string, headers: MatchHeaders, options?: ModifyDemonOptions): Promise<ResponseBody<Tagged<ExtendedDemon>>>;
        public postCreator(demonId: number | string, options: AddCreatorOptions): Promise<ResponseBody<any>>;
        public deleteCreator(demonId: number | string, creatorId: number | string): Promise<ResponseBody<any>>;
        public patchPlayer(id: number | string, headers: MatchHeaders, options?: ModifyPlayerOptions): Promise<ResponseBody<Tagged<ExtendedPlayer>>>;
        public patchRecord(id: number | string, headers: MatchHeaders, options?: ModifyRecordOptions): Promise<ResponseBody<Tagged<ExtendedRecord>>>;
        public deleteRecord(id: number | string, headers: MatchHeaders): Promise<ResponseBody<any>>;
        public postRecordNote(recordId: number | string, options: AddRecordNoteOptions): Promise<ResponseBody<Tagged<RecordNote>>>;
        public patchRecordNote(recordId: number | string, noteId: number | string, options: ModifyRecordNoteOptions): Promise<ResponseBody<Tagged<RecordNote>>>;
        public deleteRecordNote(recordId: number | string, noteId: number | string): Promise<ResponseBody<any>>;
        public getSubmitters(options?: SearchSubmitterOptions): Promise<ResponseBody<Submitter[]>>;
        public getSubmitter(id: number | string, headers?: MatchOptionalHeaders): Promise<ResponseBody<Tagged<Submitter>>>;
        public patchSubmitter(id: number | string, headers: MatchHeaders, options?: ModifySubmitterOptions): Promise<ResponseBody<Tagged<Submitter>>>;
    }
    
    export interface ListMetadata {
        list_size: number;
        extended_list_size: number;
    }
    
    export type MatchHeaders = {
        "If-Match": string;
    }
    
    export type MatchOptionalHeaders = {
        "If-Match"?: string;
        "If-None-Match"?: string;
    }
    
    export type ModifyAccountOptions = {
        password?: string;
        display_name?: string;
        youtube_channel?: string;
    }
    
    export type ModifyDemonOptions = {
        name?: string;
        position?: number;
        requirement?: number;
        verifier?: string;
        publisher?: string;
        video?: string;
    }
    
    export type ModifyPlayerOptions = {
        name?: string;
        banned?: string;
        nationality?: string;
        subdivision?: string;
    }
    
    export type ModifyRecordNoteOptions = {
        content?: string;
    }
    
    export type ModifyRecordOptions = {
        progress?: number;
        video?: string;
        status?: string;
        player?: string;
        demon?: string;
        demon_id?: number;
    }
    
    export type ModifySubmitterOptions = {
        banned?: boolean;
    }
    
    export type ModifyUserOptions = {
        display_name?: string;
        youtube_channel?: string;
        permissions?: string;
    }
    
    export interface Nationality {
        country_code: string;
        nation: string;
    }
    
    export interface NationalityDemonPlayer extends BaseNationalityDemon {
        player: string;
    }
    
    export interface NationalityDemonPlayers extends BaseNationalityDemon {
        players: string[];
    }
    
    export interface NationalityRecord {
        nationality: Nationality;
        created: NationalityDemonPlayers[];
        verified: NationalityDemonPlayer[];
        records: NationPlayerRecord[];
        unbeaten: BaseDemon[];
    }
    
    export interface NationPlayerRecord extends NationalityDemonPlayers {
        progress: number;
    }
    
    export type OptionalAuthHeaders = {
        Authorization?: string;
    }
    
    export type PaginatedOptions = {
        limit?: number;
        before?: number;
        after?: number;
    }
    
    export interface Player extends BasePlayer {
        nationality: Nationality;
    }
    
    export interface PlayerRecord extends BaseRecord {
        demon: BaseDemon;
    }
    
    export class Pointercrate extends BasePointercrate {
        public createAccount(options: CreateAccountOptions): Promise<ResponseBody<Tagged<User>>>;
        public getDemons(options?: SearchDemonOptions): Promise<ResponseBody<Demon[]>>;
        public getListedDemons(options?: SearchDemonOptions): Promise<ResponseBody<Demon[]>>;
        public getDemon(id: number | string, headers?: MatchOptionalHeaders): Promise<ResponseBody<Tagged<ExtendedDemon>>>;
        public getPlayers(options?: SearchPlayerOptions, headers?: OptionalAuthHeaders): Promise<ResponseBody<Player[]>>;
        public getPlayerRanking(options?: SearchPlayerRankingOptions): Promise<ResponseBody<RankedPlayer[]>>;
        public getPlayer(id: number | string, headers?: MatchOptionalHeaders): Promise<ResponseBody<Tagged<ExtendedPlayer>>>;
        public getRecords(options?: SearchRecordOptions, headers?: OptionalAuthHeaders): Promise<ResponseBody<Record[]>>;
        public postRecord(options: SubmitRecordOptions, headers?: OptionalAuthHeaders): Promise<ResponseBody<Tagged<ExtendedRecord>>>;
        public getRecord(id: number | string, headers?: MatchOptionalHeaders & OptionalAuthHeaders): Promise<ResponseBody<Tagged<ExtendedRecord>>>;
        public getNationality(code: string): Promise<ResponseBody<Tagged<NationalityRecord>>>;
        public getNationalityRanking(options?: SearchNationRankingOptions): Promise<ResponseBody<Tagged<RankedNation>>>;
        public getNationalitySubdivisions(code: string): Promise<ResponseBody<Subdivision[]>>;
        public getListMetadata(): Promise<ResponseBody<ListMetadata>>;
    }
    
    export interface RankedNation extends Nationality {
        rank: number;
        score: number;
    }
    
    export interface RankedPlayer extends Player {
        rank: number;
        score: number;
    }
    
    export interface Record extends BaseRecord {
        player: BasePlayer;
        demon: BaseDemon;
    }
    
    export interface RecordNote {
        id: number;
        author: string;
        content: string;
        editors: string[];
        transferred: boolean;
    }
    
    export interface ResponseBody<T> {
        body: T;
        headers: {
            [key: string]: string;
        };
    }
    
    export type SearchDemonOptions = PaginatedOptions & {
        name?: string;
        name_contains?: string;
        requirement?: number;
        requirement__lt?: number;
        requirement__gt?: number;
        verifier_id?: number;
        verifier_name?: string;
        publisher_id?: number;
        publisher_name?: string;
    }
    
    export type SearchNationRankingOptions = {
        continent?: string;
        name_contains?: string;
    }
    
    export type SearchPlayerOptions = {
        name?: string;
        name_contains?: string;
        banned?: boolean;
        nation?: string;
    }
    
    export type SearchPlayerRankingOptions = {
        name_contains?: string;
        continent?: string;
        nation?: string;
        subdivision?: string;
    }
    
    export type SearchRecordOptions = PaginatedOptions & {
        progress__lt?: number;
        progress__gt?: number;
        demon_position?: number;
        demon_position__lt?: number;
        demon_position__gt?: number;
        status?: string;
        player?: number;
        demon?: string;
        demon_id?: string;
        video?: string;
        submitter?: number;
    }
    
    export type SearchSubmitterOptions = PaginatedOptions & {
        banned?: boolean;
    }
    
    export type SearchUserOptions = PaginatedOptions & {
        name?: string;
        name_contains?: string;
        display_name?: string;
        has_permissions?: string;
        any_permissions?: string;
    }
    
    export type SendRequestOptions = {
        method?: string;
        headers?: any;
        body?: any;
    }
    
    export interface Subdivision {
        iso_code: string;
        name: string;
    }
    
    export interface SubdivisionNationality extends Nationality {
        subdivision: Subdivision;
    }
    
    export type SubmitRecordOptions = {
        player: string;
        demon: number;
        progress: number;
        video?: string;
        status?: string;
        note?: string;
    }
    
    export interface Submitter {
        id: number;
        banned: boolean;
    }
    
    export interface Tagged<T> {
        data: T;
    }
    
    export interface TaggedUser extends Tagged<User> {
        token: string;
    }
    
    export interface User {
        id: number;
        name: string;
        permissions: number;
        display_name: string;
        youtube_channel: string;
    }
}