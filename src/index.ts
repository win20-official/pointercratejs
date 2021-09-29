import BaseAuthPointercrate = require("./classes/BaseAuthPointercrate");
import BasePointercrate = require("./classes/BasePointercrate");
import BasicAuthPointercrate = require("./classes/BasicAuthPointercrate");
import Endpoints = require("./classes/Endpoints");
import JWTAuthPointercrate = require("./classes/JWTAuthPointercrate");
import Pointercrate = require("./classes/Pointercrate");

export {
    BaseAuthPointercrate,
    BasePointercrate,
    BasicAuthPointercrate,
    Endpoints,
    JWTAuthPointercrate,
    Pointercrate
}

export {
    BaseDemon,
    Demon,
    ExtendedDemon
} from "./interfaces/demon";
export {
    ListMetadata,
    Tagged,
    TaggedUser,
    ResponseBody,
    User
} from "./interfaces/misc";
export {
    Nationality,
    SubdivisionNationality,
    Subdivision,
    BaseNationalityDemon,
    NationalityDemonPlayer,
    NationalityDemonPlayers,
    NationPlayerRecord,
    NationalityRecord,
    RankedNation
} from "./interfaces/nationality";
export {
    BasePlayer,
    Player,
    RankedPlayer,
    ExtendedPlayer
} from "./interfaces/player";
export {
    BaseRecord,
    DemonRecord,
    PlayerRecord,
    Record,
    ExtendedRecord,
    RecordNote,
    Submitter
} from "./interfaces/record";

export {
    MatchHeaders,
    MatchOptionalHeaders,
    OptionalAuthHeaders
} from "./types/headers";
export {
    SendRequestOptions,
    PaginatedOptions,
    SearchDemonOptions,
    SearchPlayerOptions,
    SearchPlayerRankingOptions,
    SearchRecordOptions,
    SubmitRecordOptions,
    CreateAccountOptions,
    ModifyAccountOptions,
    SearchUserOptions,
    ModifyUserOptions,
    AddDemonOptions,
    ModifyDemonOptions,
    AddCreatorOptions,
    ModifyPlayerOptions,
    ModifyRecordOptions,
    AddRecordNoteOptions,
    ModifyRecordNoteOptions,
    SearchSubmitterOptions,
    ModifySubmitterOptions,
    SearchNationRankingOptions
} from "./types/options";