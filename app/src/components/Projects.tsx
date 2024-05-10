import {useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {Project} from "../types/Project.ts";
import ProjectCard from "./ProjectCard.tsx";
import {StrapiArrayResponse} from "../types/StrapiArrayResponse.ts";

export default function () {
    const [projects, setProjects] = useState<Project<false>[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get<StrapiArrayResponse<Project<true>>>(endpoints.PROJECTS + '?populate[0]=repository&populate[1]=repository.topics&populate[2]=thumbnail')
            .then(({data}) => {
                setProjects(data.data.map((project) => {
                    const {attributes} = project;

                    const topics = attributes.repository.data.attributes.topics.data !== null ?
                        attributes.repository.data.attributes.topics.data.map((topic) => topic.attributes.name)
                        : [];

                    return {
                        ...attributes,
                        id: project.id,
                        repository: {
                            ...attributes.repository.data.attributes,
                            topics,
                            owner: undefined
                        }
                    }
                }));
                setLoading(false);
            });
    }, []);

    return (
        <section className="container mx-auto px-4 ">
            <div className="relative items-center w-full py-12 mx-auto max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-16 mx-auto lg:grid-cols-3">
                    {loading &&
                        new Array(9).fill(0).map((_, index) => (
                            <ProjectCard key={index}
                                         slug={""}
                                         headline={""}
                                         header={""}
                                         isSkeleton={true}
                                         thumbnail={null}
                                         shortDescription={""}/>
                        ))
                    }

                    {
                        !loading && projects.map((project, index) => (
                            <ProjectCard key={index}
                                         slug={project.slug + '-' + project.id}
                                         headline={(project.headline ? project.headline : project.repository.name).replaceAll('-', ' ')}
                                         header={project.repository.full_name}
                                         isSkeleton={false}
                                         thumbnail={project.thumbnail.data === null ? null : project.thumbnail.data.attributes}
                                         shortDescription={project.shortDescription ?? project.repository.description}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
