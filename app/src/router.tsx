// Or use plain objects
import {createBrowserRouter} from "react-router-dom";
import App from "./App.tsx";

export default createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
]);
