import {
    Button,
    Typography,
} from "@material-tailwind/react";
import replaceStringWithColorClass from "../functions/replaceStringWithColorClass.ts";
import {Suspense, useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {StrapiResponse} from "../types/StrapiResponse.ts";
import {Hero} from "../types/Hero.ts";
import Skeleton from 'react-loading-skeleton'

export default function () {
    const [hero, setHero] = useState<Hero | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosInstance.get<StrapiResponse<Hero>>(endpoints.HERO + '?populate=*').then(({data}) => {
            setHero(data.data.attributes);
            setLoading(false);
        });
    }, []);
    return (
        <header className="bg-white " style={
            {
                boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important"
            }
        }>
            <div
                className="grid min-h-[26vh] w-full  place-items-stretch" style={{
                boxShadow: 'inset 0px 6px 20px 4px #a7a7a71f',
                padding: '120px 0'
            }}>
                <div className="container mx-auto px-4 ">
                    {loading ?
                        <Skeleton count={1} height={26} width={'30%'}/>
                        :
                        hero?.alert &&
                        hero?.alert.isActive &&
                        <Typography
                            as={"a"}
                            href={hero?.alert.url}
                            className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
                            {hero?.alert.content}
                        </Typography>
                    }
                    {loading ?
                        <Skeleton count={2} height={55} containerClassName="block my-6 w-full lg:max-w-3xl"/>
                        :
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className=" my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
                            dangerouslySetInnerHTML={{
                                __html: replaceStringWithColorClass(hero?.title ?? '')
                            }}
                        />
                    }

                    {loading ?
                        <Skeleton count={2} containerClassName="block w-8/12" height={28}/>
                        :
                        <Typography
                            variant="lead"
                            className="w-8/12 !text-gray-500 lg:text-lg text-base"
                        >
                            {hero?.description}
                        </Typography>
                    }


                    <div className="mt-8 grid w-full place-items-start md:justify-start">
                        <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                            {loading ?
                                <>
                                    <Skeleton count={1}  containerClassName="w-full md:w-[200px]" height={50}/>
                                    <Skeleton count={1}  containerClassName="w-full md:w-[200px]" height={50}/>
                                </>
                                :
                                hero?.buttons?.map((button, index) => (
                                    button.isActive &&
                                    <a
                                        key={index}
                                        href={button.url}
                                        target="_blank"
                                    >
                                        <Button
                                            color={button?.color ?? 'blue'}
                                            variant={button?.type ?? 'filled'}
                                            className="w-full px-6 md:w-auto flex items-center gap-3"
                                        >
                                            <span dangerouslySetInnerHTML={{__html: button.svg}}></span>
                                            {button.content}
                                        </Button>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
