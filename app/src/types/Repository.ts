import {Owner} from "./Owner.ts";
import {StrapiResponse} from "./StrapiResponse.ts";
import {StrapiArrayResponse} from "./StrapiArrayResponse.ts";

export interface Repository<T> {
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
    license: {
        name: string
    } | null;
    owner?: T extends true ? StrapiResponse<Owner>: Owner;
    topics: T extends true ? StrapiArrayResponse<{
        name: string
    }> : string[]
}
