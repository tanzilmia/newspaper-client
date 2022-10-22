import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categorie from "../Pages/Categories/Categorie";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Profile from "../Pages/other/Profile/Profile";
import TearmandCondition from "../Pages/other/TearmAndConditon/TearmandCondition";
import Register from "../Pages/Register/Register";
import PrivetRouter from "./PrivetRouter/PrivetRouter";

 const routes = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, children :[
            {
                path : '/' ,
                 element : <Home></Home>,
                 loader : () => fetch('https://dragon-news-server-module-61.vercel.app/news')
            },
            {
                path : '/categories/:id',
                element : <Categorie></Categorie>,
                loader : ({params}) => fetch(`https://dragon-news-server-module-61.vercel.app/categori/${params.id}`)
            
            },
            {
                path : '/news/:id',
                element : <PrivetRouter><News></News></PrivetRouter>,
                loader : ({params}) => fetch(`https://dragon-news-server-module-61.vercel.app/news/${params.id}`)
            },
        
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/tearms',
                element : <TearmandCondition></TearmandCondition>
            },
            {
                path : '/profile',
                element : <PrivetRouter> <Profile></Profile> </PrivetRouter>,
            }

        ]
    }
])

export default routes