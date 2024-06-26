import {StrapiPagination} from "./StrapiPagination.ts";

export interface StrapiResponse<T> {
    data: {
        id: number,
        attributes: T & {
            createdAt: string,
            updatedAt: string
            publishedAt: string,
        }
    },
    meta: {
        pagination?: StrapiPagination
    }
}
