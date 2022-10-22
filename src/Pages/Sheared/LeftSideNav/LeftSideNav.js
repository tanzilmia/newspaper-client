import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setcategories] = useState([])
    useEffect(() => {
      fetch('https://dragon-news-server-module-61.vercel.app/news-categories')
      .then(res => res.json())
      .then(data => setcategories(data))
    }, [])
    
    return (
        <div>
            <h2>Left Side Nav {categories.length} </h2>
            <div>
                {
                    categories.map(categori => <p key={categori.id}>
                        <Link to={`/categories/${categori.id}`}>{categori.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;