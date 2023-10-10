import {createBrowserRouter} from "react-router-dom";
// import NotFound from "./views/NotFound";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    // {
    //   path: "*",
    //   element: <NotFound/>
    // }
], {basename: "/university-frontend"})

export default router;
