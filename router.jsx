import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import Blogs from "./src/pages/Blogs";
import Create from "./src/pages/Create";





const router= createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/> },
            {path: "blogs", element: <Blogs/>},
            {path: "create", element: <Create/>},
            

        ]

    }

])

export default router;