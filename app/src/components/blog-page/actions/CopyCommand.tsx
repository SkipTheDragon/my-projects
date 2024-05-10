import {IconButton, Typography} from "@material-tailwind/react";
import {useCopyToClipboard} from "usehooks-ts";
import {CheckIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

export function CopyCommand(
    {
        command
    }: {
        command: string
    }
) {
    const [_, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);

    return (
        <div>
            <div className="flex items-center w-100 gap-x-4 bg-gray-300 p-3 px-6 rounded">
                <Typography variant="small">{command}</Typography>
                <IconButton
                    onMouseLeave={() => setCopied(false)}
                    onClick={() => {
                        copy(command).then(_ => setCopied(true));
                    }}
                >
                    {copied ? (
                        <CheckIcon className="h-5 w-5 text-white"/>
                    ) : (
                        <DocumentDuplicateIcon className="h-5 w-5 text-white"/>
                    )}
                </IconButton>
            </div>
        </div>
    );
}
