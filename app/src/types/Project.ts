import {Repository} from "./Repository.ts";
import {StrapiResponse} from "./StrapiResponse.ts";
import {Image} from "./Image.ts";


export interface Project<T> {
    headline: string;
    thumbnail: {
        data: {
            attributes: Image
        }|null
    };
    content: string;
    shortDescription: string;
    repository: T extends true ? StrapiResponse<Repository> : Repository;
}
