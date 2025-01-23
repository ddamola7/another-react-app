import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Home from "./src/pages/Home";
import Signup from "./src/pages/Signup";
import Login from "./src/pages/Login";





const router= createBrowserRouter([

    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/> },
            {path: "signup", element: <Signup/>},
            {path: "login", element: <Login/>},
            

        ]

    }

])

export default router;