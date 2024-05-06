import {Repository} from "./Repository.ts";
import {StrapiResponse} from "./StrapiResponse.ts";

export interface Project<T> {
    headline: string;
    thumbnail: string;
    content: string;
    shortDescription: string;
    repository: T extends true ? StrapiResponse<Repository> : Repository;
}
