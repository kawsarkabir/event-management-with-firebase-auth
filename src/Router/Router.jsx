import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register.jsx/Register";

const Router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout></Layout>, 
        children:[
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/about', 
                element: <About></About>
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
              path: '/register', 
              element: <Register></Register>
            }
        ]
    }
])

export default Router;