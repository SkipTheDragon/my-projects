import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-type": "application/json"
    }
})

export const endpoints = {
    GLOBAL_ALERT: "/global-alert",
    HERO: "/hero",
    FOOTER: "/footer",
    REPOSITORIES: "/repositories",
    PROJECTS: "/projects",
}
