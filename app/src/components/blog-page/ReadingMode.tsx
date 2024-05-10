import {Tooltip, Typography} from "@material-tailwind/react";
import {useEffect} from "react";

export default function ReadingMode(
    {setReadingMode, readingMode}: {
        setReadingMode: (mode: "hr" | "developer") => void,
        readingMode: "hr" | "developer"
    }
) {

    useEffect(() => {
        // Save to local storage and set the reading mode.
        const savedReadingMode = localStorage.getItem('readingMode');
        if (savedReadingMode) {
            setReadingMode(savedReadingMode as "hr" | "developer");
        } else {
        }
    }, []);

    return (
        <div className="w-fit mt-16">
            <div className="flex gap-4 " role="tablist"
                 aria-orientation="horizontal">
                <h4 className=" flex items-center justify-center">
                    <Tooltip
                        content={
                            <div className="w-80">
                                <Typography color="white" className="font-bold">
                                    Reading mode
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal opacity-80"
                                >
                                    By choosing one of the two options on the right side, the text will be phrased in a
                                    way
                                    that you might find easier to understand.
                                    <br/>
                                    <br/>
                                    If you're <strong>a developer</strong>, you might want to read the
                                    technical details of the
                                    project. If you're an <strong>HR specialist or a possible
                                    client</strong>, you might want to
                                    read the project's overview.
                                </Typography>
                            </div>
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-5 w-5 cursor-pointer text-blue-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                        </svg>
                    </Tooltip>
                </h4>
                <button
                    onClick={() => setReadingMode('developer')}
                    className={"rounded-full py-1 px-5 text-base  " + (readingMode === 'developer' ? 'text-white' : 'text-black') + " focus:outline-none data-[selected]:bg-blue-500 data-[hover]:bg-blue-500/5 data-[selected]:data-[hover]:bg-blue-500 data-[focus]:outline-1 data-[focus]:outline-white"}
                    role="tab" type="button"
                    {...(readingMode === 'developer' && {'data-selected': true})}>I'm a fellow Developer
                </button>
                <button
                    onClick={() => setReadingMode('hr')}
                    className={"rounded-full py-1 px-5 text-base " + (readingMode === 'hr' ? 'text-white' : 'text-black') + " focus:outline-none data-[selected]:bg-blue-500 data-[hover]:bg-blue-500/5 data-[selected]:data-[hover]:bg-blue-500 data-[focus]:outline-1 data-[focus]:outline-white"}
                    role="tab" type="button"
                    {...(readingMode === 'hr' && {'data-selected': true})}>I'm a HR Specialist/Possible
                    Client
                </button>
            </div>
        </div>
    )

}
