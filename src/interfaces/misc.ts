/**
 * Represents a response containing list metadata.
 */
export interface ListMetadata {
    list_size: number;
    extended_list_size: number;
}

/**
 * Represents a response marked with a `data` object.
 */
export interface Tagged<T> {
    data: T;
}

/**
 * Represents a response marked with a `data` object, and a JWT authentication `token`.
 */
export interface TaggedUser extends Tagged<User> {
    token: string;
}

/**
 * Represents the object returned by `BasePointercrate#sendRequest`.
 */
export interface ResponseBody<T> {
    body: T;
    headers: {
        [key: string]: string;
    }
}

/**
 * Each pointercrate user is represented by this object.
 */
export interface User {
    id: number;
    name: string;
    permissions: number;
    display_name: string;
    youtube_channel: string;
}