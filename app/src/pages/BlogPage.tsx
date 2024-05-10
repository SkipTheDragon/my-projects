import {Link, useParams} from "react-router-dom";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {useEffect, useState} from "react";
import {FooterElement} from "../components/Footer.tsx";
import {Project} from "../types/Project.ts"
import {BlocksRenderer} from '@strapi/blocks-react-renderer';
import ReadingMode from "../components/blog-page/ReadingMode.tsx";
import Author from "../components/blog-page/Author.tsx";
import Data from "../components/blog-page/Data.tsx";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Actions from "../components/blog-page/Actions.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {StrapiResponse} from "../types/StrapiResponse.ts";
import Skeleton from "react-loading-skeleton";

TimeAgo.addDefaultLocale(en)
const timeAgo = new TimeAgo('en-US')

export default function ProjectPage() {
    let {slug} = useParams();
    if (slug === undefined) {
        return <ErrorPage/>;
    }
    const [project, setProject] = useState<Project<false> | null>(null);
    const [loading, setLoading] = useState(true);
    // Get id from slug: project-test-12. The number 12 being our id.
    const id = slug.split('-').pop();
    const [readingMode, _setReadingMode] = useState<'developer' | 'hr'>('developer');

    const setReadingMode = (mode: 'developer' | 'hr') => {
        localStorage.setItem('readingMode', mode);
        _setReadingMode(mode);
    }

    useEffect(() => {
        axiosInstance.get<StrapiResponse<Project<true>>>(endpoints.PROJECTS + '/' + id +
            '?populate[0]=repository&populate[1]=repository.owner&populate[2]=repository.license&populate[3]=repository.topics&populate[4]=thumbnail')
            .then(({data}) => {
                const {attributes} = data.data;

                const owner = attributes.repository.data.attributes.owner?.data.attributes;

                const topics = attributes.repository.data.attributes.topics.data !== null ?
                    attributes.repository.data.attributes.topics.data.map((topic) => topic.attributes.name)
                    : [];

                setProject({
                    ...attributes,
                    id: project?.id,
                    repository: {
                        ...attributes.repository.data.attributes,
                        topics,
                        owner
                    }
                });

                setLoading(false);
            });

    }, [])

    useEffect(() => {
        if (project !== null) {
            document.title = (project?.headline ? project?.headline : project?.repository.name).replaceAll('-', ' ') + ' - ' + project?.repository.description;
        }
    }, [project]);

    return (
        <>
            <div className="max-w-screen-lg mx-auto container mx-auto px-4">
                <main className="mt-10">

                    <Link to="/" className="text-blue-500 hover:text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
                        </svg>
                        Go back
                    </Link>

                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 lg:px-0">
                            {loading ?
                                <Skeleton height={40} count={2}/>
                                :
                                (project &&
                                    <h2 className="text-4xl font-semibold capitalize text-gray-800 leading-tight">
                                        {(project?.headline ?? project?.repository.name).replaceAll('-', ' ')} - {project?.repository.description}
                                    </h2>
                                )
                            }

                            {loading ?
                                <Skeleton count={4} className="!w-[50px] " containerClassName="flex gap-2 my-4 "/>
                                :
                                project?.repository.topics && project?.repository.topics.length > 0 &&
                                <div className="flex flex-wrap my-4">
                                    {project?.repository.topics.map((topic: string, index: number) => (
                                        <span key={index}
                                              className="text-xs font-semibold bg-gray-200 text-gray-800 rounded-full px-2 py-1 mr-2 mb-2">{topic}</span>
                                    ))}
                                </div>

                            }
                        </div>

                        {loading ?
                            <Skeleton height="400px" className="w-full mb-8 lg:h-96 md:h-48"/>
                            :
                            project?.thumbnail.data !== null &&
                            <img className="object-cover object-center w-full mb-8 lg:h-96 md:h-48 rounded-xl"
                                 src={import.meta.env.VITE_STORAGE_URL + project?.thumbnail.data.attributes.formats.medium.url}
                                 alt="blog"/>
                        }
                    </div>
                    <section className="mt-2">
                        <div className="grid grid-cols-3 gap-4">
                            {
                                loading ?
                                    <Data
                                        isForked={false}
                                        stargazers={0}
                                        watchers={0}
                                        license={'No license provided'}
                                        lastPush={'No push date provided'}
                                        loading={true}
                                    />
                                    :
                                    project?.repository &&
                                    <Data
                                        isForked={project?.repository.fork}
                                        stargazers={project?.repository.stargazers_count}
                                        watchers={project?.repository.watchers_count}
                                        license={project?.repository.license?.name ?? 'No license provided'}
                                        lastPush={timeAgo.format(Date.parse(project?.repository.pushedTime))}
                                    />
                            }

                            {loading ?
                                <Actions
                                    projectUrl={''}
                                    liveDemoUrl={''}
                                    sshUrl={''}
                                    httpUrl={''}
                                    loading={true}
                                />
                                :
                                project?.repository &&
                                <Actions
                                    projectUrl={project?.repository.html_url}
                                    liveDemoUrl={project?.liveDemoUrl}
                                    sshUrl={project?.repository.ssh_url}
                                    httpUrl={project?.repository.clone_url}
                                />
                            }

                        </div>
                    </section>

                    <ReadingMode readingMode={readingMode} setReadingMode={setReadingMode}/>

                    <div className="px-4 lg:px-0 mt-8 text-gray-700 text-justify text-lg leading-relaxed w-full ">
                        {loading ?
                            <>
                                <Skeleton count={6}/>
                                <Skeleton count={4} containerClassName="my-4 block"/>
                                <Skeleton count={6}/>
                            </>
                            :
                            readingMode === 'developer' ?
                                project?.content ?
                                    <BlocksRenderer
                                        content={project?.content}/>
                                    : ' No additional content provided just yet.'
                                :
                                project?.hrContent ?
                                    <BlocksRenderer
                                        content={project?.hrContent}/>
                                    : ' No additional content provided just yet.'
                        }
                    </div>

                    {loading ?
                        <Author
                            avatar={''}
                            login={''}
                            bio={''}
                            loading={true}
                        />
                        :
                        project?.repository.owner &&
                        <Author
                            avatar={project?.repository.owner?.avatar_url}
                            login={project?.repository.owner?.login}
                            bio={project?.repository.owner?.bio}
                        />
                    }

                </main>
            </div>

            <FooterElement/>
        </>
    );
}
