import {Suspense, useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {Alert} from "../types/atoms/Alert.ts";
import {GlobalAlert} from "../types/GlobalAlert.ts";
import Loading from "./Loading.tsx";
import {StrapiResponse} from "../types/StrapiResponse.ts";

export default function () {
    const [alert, setAlert] = useState<Alert | null>(null);

    useEffect(() => {
        axiosInstance.get<StrapiResponse<GlobalAlert>>(endpoints.GLOBAL_ALERT + '?populate=*').then(({data}) => {
            setAlert(data.data.attributes.alert);
        });
    }, []);

    return (
        <>
            {
                alert &&
                alert.isActive &&
                <section>
                    <a href={alert.url}>
                        <div
                            className={"relative items-center w-full bg-" + alert?.bgColor + "-500 text-white p-5 text-center font-semibold"}>
                            {alert?.content}
                        </div>
                    </a>
                </section>
            }
        </>
    )
}
