import {StrapiPagination} from "./StrapiPagination.ts";

export interface StrapiArrayResponse<T> {
    data: {
        attributes: T & {
            createdAt: string,
            updatedAt: string
            publishedAt: string,
        }
        id: number
    }[],
    meta: {
        pagination?: StrapiPagination
    }
}
