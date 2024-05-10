import {Card, CardBody, CardFooter, Dialog, Typography} from "@material-tailwind/react";
import {CopyCommand} from "./CopyCommand.tsx";

export default function (
    {
        open,
        handleOpen,
        sshUrl,
        httpUrl
    }: {
        open: boolean,
        handleOpen: () => void,
        sshUrl: string,
        httpUrl: string
    }
) {
    return (
        <Dialog
            size="xs"
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[32rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Preview this project locally.
                    </Typography>
                    <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                    >
                        90% of my projects are built with <a href="https://lando.dev/download/"
                                                             className="underline"
                                                             target="_blank">Lando</a> as a local development
                        environment.
                        <br/>
                        <br/>
                        If you want to run
                        them locally
                        make sure to have <a href="https://docs.docker.com/get-docker/" className="underline"
                                             target="_blank">Docker</a> and <a href="https://lando.dev/download/"
                                                                               className="underline"
                                                                               target="_blank">Lando</a> installed.
                    </Typography>

                    <Typography className="-mb-2" variant="h6">
                        SSH
                    </Typography>
                    <CopyCommand command={'git clone ' + sshUrl}/>

                    <Typography className="-mb-2" variant="h6">
                        HTTP
                    </Typography>
                    <CopyCommand command={'git clone ' + httpUrl}/>

                </CardBody>
                <CardFooter className="pt-0">
                    <Typography
                        className="mb-3 font-normal"
                        variant="paragraph"
                        color="gray"
                    >
                        Clone using the commands above then just run <code className="bg-gray-300 p-1 rounded">lando
                        start</code> in the project
                        directory.
                    </Typography>
                </CardFooter>
            </Card>
        </Dialog>

    )
}
