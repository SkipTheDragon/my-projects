export interface StrapiResponse<T> {
    data: {
        id: number,
        attributes: T & {
            createdAt: string,
            updatedAt: string
            publishedAt: string,
        }
    },
    meta: object // TODO: define meta type
}
