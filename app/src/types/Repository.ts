import {Owner} from "./Owner.ts";

export interface Repository {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    fork: boolean;
    createdTime: string;
    updatedTime: string;
    pushedTime: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    homepage: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    owner: Owner;
    topics: string[]
}
