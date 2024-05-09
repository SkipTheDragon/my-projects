import {Image} from "../types/Image.ts";

export type ProjectCardProps = {
    header: string,
    headline: string,
    shortDescription: string
    thumbnail: Image|null
}

export default function (
    {
        header,
        headline,
        shortDescription,
        thumbnail
    }: ProjectCardProps
) {
    return (
        <div className="">
            {
                thumbnail &&
                <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src={import.meta.env.VITE_STORAGE_URL + thumbnail.formats.thumbnail.url}
                 alt="blog"/>
            }
            <a href="#">
                <h1 className="mx-auto mb-4 text-2xl capitalize font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{headline}</h1>
            </a>
            <a href="#" target="_blank">
                <h2 className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">{header}</h2>
            </a>
            <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">{shortDescription}</p>
            <div className="mt-2">
                <a href="#"
                   className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                   title="read more"> Read More » </a>
            </div>
        </div>
    )
}
