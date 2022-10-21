import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categorie from "../Pages/Categories/Categorie";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import News from "../Pages/News/News";
import Register from "../Pages/Register/Register";

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
                element : <News></News>,
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

        ]
    }
])

export default routes