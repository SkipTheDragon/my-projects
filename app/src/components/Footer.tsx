import { Typography } from "@material-tailwind/react";
import {useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {StrapiResponse} from "../types/StrapiResponse.ts";
import Footer from "../types/Footer.ts";
import Skeleton from "react-loading-skeleton";
const currentYear = new Date().getFullYear();

export function FooterElement() {
    const [footer, setFooter] = useState<Footer | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axiosInstance.get<StrapiResponse<Footer>>(endpoints.FOOTER + '?populate=*').then(({data}) => {
            setFooter(data.data.attributes);
            setLoading(false);
        });
    }, []);

    return (
        <footer className="px-8 py-28">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {loading ?
                        <Skeleton count={1} height={30} containerClassName="min-w-[300px]"/>
                        :
                        footer?.links && footer?.links.map((link, index) => (
                        <ul key={index}>
                            <li>
                                <Typography
                                    as="a"
                                    href={link.url}
                                    color="white"
                                    className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                                >
                                    {link.content}
                                </Typography>
                            </li>
                        </ul>
                    ))}
                </div>
                <Typography
                    color="blue-gray"
                    className="mt-6 !text-sm !font-normal text-gray-500"
                >
                    Copyright &copy; {currentYear} {loading ? <Skeleton containerClassName="inline-block w-[50px]" count={1} /> : footer?.author}. <a className="underline text-slated-700" href={footer?.learnMoreUrl}>Learn more</a> about how this site was built.
                </Typography>
            </div>
        </footer>
    );
}
