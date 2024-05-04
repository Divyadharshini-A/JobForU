import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import Update from "../Pages/Update";
import Login from "../components/Login";
import Details from "../Pages/Details";
import Application from "../Pages/Application";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {path :"/", element:<Home/>,},
      
        {path:"/post-job",element:<CreateJob/>,},

        {path:"/my-jobs",element:<MyJobs/>,},

        {path:"/salary",element:<SalaryPage/>,},

        {path:"/application",element:<Application/>,},

        {path:"edit-job/:id",element:<Update/>,
        loader:({params}) => fetch(`http://localhost:5000/all-jobs/${params.id}`),
  
      },
      {
        path:"/job/:id",
        element:<Details/>,
      },
      ]
    },
    {
      path:"/login",
      element:<Login/>
    }
  ]);

  export default router;