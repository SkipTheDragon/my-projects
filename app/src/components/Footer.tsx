import { Typography } from "@material-tailwind/react";
import {useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {StrapiResponse} from "../types/StrapiResponse.ts";
import Footer from "../types/Footer.ts";
const currentYear = new Date().getFullYear();

export function FooterElement() {
    const [footer, setFooter] = useState<Footer | null>(null);

    useEffect(() => {
        axiosInstance.get<StrapiResponse<Footer>>(endpoints.FOOTER + '?populate=*').then(({data}) => {
            setFooter(data.data.attributes);
        });
    }, []);

    return (
        <footer className="px-8 py-28">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
                    {footer?.links && footer?.links.map((link, index) => (
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
                    Copyright &copy; {currentYear} {footer?.author}. <a className="underline text-slated-700" href={footer?.learnMoreUrl}>Learn more</a> about how this site was built.
                </Typography>
            </div>
        </footer>
    );
}
