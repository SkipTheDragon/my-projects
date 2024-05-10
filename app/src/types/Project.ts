import {Repository} from "./Repository.ts";
import {StrapiResponse} from "./StrapiResponse.ts";
import {Image} from "./Image.ts";
import {BlocksContent} from "@strapi/blocks-react-renderer";

export interface Project<T> {
    headline: string;
    id?: number,
    slug: string,
    liveDemoUrl: string,
    thumbnail: {
        data: {
            attributes: Image
        } | null
    };
    content: BlocksContent,
    hrContent: BlocksContent,
    shortDescription: string;
    repository: T extends true ? StrapiResponse<Repository<true>> : Repository<false>;
}
