import {Image} from "../types/Image.ts";
import Skeleton from "react-loading-skeleton";

export type ProjectCardProps = {
    header: string,
    headline: string,
    shortDescription: string
    thumbnail: Image | null
    isSkeleton: boolean
}

export default function (
    {
        header,
        headline,
        shortDescription,
        thumbnail,
        isSkeleton
    }: ProjectCardProps
) {
    return (
        <div className="">
            {isSkeleton ?
                <Skeleton count={1} className="mb-8 rounded lg:h-48 md:h-36"/>
                :
                thumbnail &&
                <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                     src={import.meta.env.VITE_STORAGE_URL + thumbnail.formats.thumbnail.url}
                     alt="blog"/>
            }

            {isSkeleton ?
                <Skeleton count={1} height={36} containerClassName="mb-4 block"/>
                :
                <a href="#">

                    <h1 className="mx-auto mb-4 text-2xl capitalize font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">{headline}</h1>
                </a>
            }
            {isSkeleton ?
                <Skeleton count={1} height={16} containerClassName="block mb-2 "/>
                :
                <a href="#" target="_blank">
                    <h2 className="mb-2 text-xs font-semibold tracking-widest text-blue-600 uppercase">{header}</h2>
                </a>
            }
            {isSkeleton ?
                <Skeleton count={3} containerClassName="block"/>
                :
                <p className="mx-auto text-base font-medium leading-relaxed text-gray-500">{shortDescription}</p>
            }
            <div className="mt-2">
                {isSkeleton ?
                    <Skeleton count={1} containerClassName="block w-[120px]" height={30}/>
                    :
                    <a href="#"
                       className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                       title="read more"> Read More » </a>
                }

            </div>
        </div>
    )
}
