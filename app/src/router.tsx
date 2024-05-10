// Or use plain objects
import {createBrowserRouter} from "react-router-dom";
import Main from "./pages/Main.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/project/:slug",
        element: <BlogPage/>
    } ,
    {
        path: "*",
        element: <ErrorPage/>
    }
]);
