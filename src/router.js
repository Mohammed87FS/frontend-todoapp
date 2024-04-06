import {Navigate, createBrowserRouter} from "react-router-dom";
import LogIn from "./views/Login";

import SignUp from "./views/Signup";
import Tasks from "./views/TaskList";
import TaskCreate from "./views/makingTasks"
import EditTask from "./views/editTasks"

import NotFound from "./views/NotFound";

import Layout from "./components/Layout"

const router= createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/login",
                element: <LogIn/>
            
            },
            
            {
                path: "/signup",
                element: <SignUp/>
            
            },
            {
                path: "/Tasks",
                element: <Tasks/>
            
            },
            {
                path: "/makingTasks",
                element: <TaskCreate/>
            
            },
            {
                path: "editTasks/:taskId",
                element: <EditTask/>
            },
            
            {
                path: "*",
                element: <NotFound/>
            
            },
        ]
    
    },

  
    






])

 export default router;