import {Formats} from "./Formats.ts";

export interface Image {
    alternativeText: string | null
    caption: string | null
    createdAt: string
    ext: string
    formats: {
        [key in Formats]: {
            ext: string,
            hash: string,
            height: number
            mime: string
            name: string
            path: null | string
            size: number
            sizeInBytes: number
            url: string
            width: number
        }
    }
    hash: string
    height: number
    mime: string
    name: string
    previewUrl: null | string
    provider: string
    provider_metadata: string
    size: number
    updatedAt: string
    url: string
    width: number
}
