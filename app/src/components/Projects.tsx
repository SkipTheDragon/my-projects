import {useEffect, useState} from "react";
import axiosInstance, {endpoints} from "../functions/axiosInstance.ts";
import {Project} from "../types/Project.ts";
import ProjectCard from "./ProjectCard.tsx";
import {StrapiArrayResponse} from "../types/StrapiArrayResponse.ts";

export default function () {
    const [projects, setProjects] = useState<Project<false>[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get<StrapiArrayResponse<Project<true>>>(endpoints.PROJECTS + '?populate=*')
            .then(({data}) => {
                setProjects(data.data.map((Project) => ({
                    ...Project.attributes,
                    repository: Project.attributes.repository.data.attributes
                })));

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
                                         headline={""}
                                         header={""}
                                         isSkeleton={true}
                                         thumbnail={null}
                                         shortDescription={""}/>
                        ))
                    }
                    {
                        !loading &&  projects.map((project, index) => (
                            <ProjectCard key={index}
                                         headline={project.headline ? project.headline.replaceAll('-', ' ') : project.repository.name}
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
