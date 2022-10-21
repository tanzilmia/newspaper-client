import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categorie from "../Pages/Categories/Categorie";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import TearmandCondition from "../Pages/other/TearmAndConditon/TearmandCondition";
import Register from "../Pages/Register/Register";
import PrivetRouter from "./PrivetRouter/PrivetRouter";

 const routes = createBrowserRouter([
    {
        path : '/', element : <Main></Main>, children :[
            {
                path : '/' ,
                 element : <Home></Home>,
                 loader : () => fetch('http://localhost:5000/news')
            },
            {
                path : '/categories/:id',
                element : <Categorie></Categorie>,
                loader : ({params}) => fetch(`http://localhost:5000/categori/${params.id}`)
            
            },
            {
                path : '/news/:id',
                element : <PrivetRouter><News></News></PrivetRouter>,
                loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
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

        ]
    }
])

export default routes