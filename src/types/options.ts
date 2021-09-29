export type SendRequestOptions = {
    method?: string;
    headers?: any;
    body?: any;
}

export type PaginatedOptions = {
    limit?: number;
    before?: number;
    after?: number;
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

export type SubmitRecordOptions = {
    player: string;
    demon: number;
    progress: number;
    video?: string;
    status?: string;
    note?: string;
}

export type CreateAccountOptions = {
    name: string;
    password: string;
}

export type ModifyAccountOptions = {
    password?: string;
    display_name?: string;
    youtube_channel?: string;
}

export type SearchUserOptions = PaginatedOptions & {
    name?: string;
    name_contains?: string;
    display_name?: string;
    has_permissions?: string;
    any_permissions?: string;
}

export type ModifyUserOptions = {
    display_name?: string;
    youtube_channel?: string;
    permissions?: string;
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

export type ModifyDemonOptions = {
    name?: string;
    position?: number;
    requirement?: number;
    verifier?: string;
    publisher?: string;
    video?: string;
}

export type AddCreatorOptions = {
    creator: string;
}

export type ModifyPlayerOptions = {
    name?: string;
    banned?: string;
    nationality?: string;
    subdivision?: string;
}

export type ModifyRecordOptions = {
    progress?: number;
    video?: string;
    status?: string;
    player?: string;
    demon?: string;
    demon_id?: number;
}

export type AddRecordNoteOptions = {
    content: string;
}

export type ModifyRecordNoteOptions = {
    content?: string;
}

export type SearchSubmitterOptions = PaginatedOptions & {
    banned?: boolean;
}

export type ModifySubmitterOptions = {
    banned?: boolean;
}

export type SearchNationRankingOptions = {
    continent?: string;
    name_contains?: string;
}