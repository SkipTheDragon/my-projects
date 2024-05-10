import {
    Button,
} from "@material-tailwind/react";
import {useState} from "react";
import CloneModal from "./actions/CloneModal.tsx";
import Skeleton from "react-loading-skeleton";

export default function (
    {
        projectUrl,
        liveDemoUrl,
        sshUrl,
        httpUrl,
        loading
    }:
        {
            projectUrl: string,
            liveDemoUrl: string,
            sshUrl: string,
            httpUrl: string,
            loading?: boolean
        }
) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    return (
        <div className="flex gap-4 flex-col ">
            {loading ?
                <>
                    <Skeleton height={48}/>
                    <Skeleton height={48}/>
                    <Skeleton height={48}/>
                </>
                :
                <>
                    {liveDemoUrl && <a
                        href={liveDemoUrl}
                        target="_blank"
                    >
                        <Button
                            color={'blue'}
                            variant={'filled'}
                            className="w-full px-6 flex items-center gap-3"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
                            </svg>

                            Live Demo
                        </Button>
                    </a>
                    }
                    <a
                        href={projectUrl}
                        target="_blank"
                    >
                        <Button
                            color={'gray'}
                            variant={'filled'}
                            className="w-full px-6 flex items-center gap-3"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path>
                            </svg>
                            See on Github
                        </Button>
                    </a>

                    <Button
                        color={'gray'}
                        variant={'filled'}
                        onClick={handleOpen}
                        className="w-full px-6 flex items-center gap-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/>
                        </svg>

                        Preview locally
                    </Button>
                </>
            }

            <CloneModal
                handleOpen={handleOpen}
                open={open}
                sshUrl={sshUrl}
                httpUrl={httpUrl}
            />
        </div>
    )
}
