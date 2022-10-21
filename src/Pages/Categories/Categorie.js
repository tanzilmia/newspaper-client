import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycart from '../Sheared/NewsSummaryCart/NewsSummarycart';

const Categorie = () => {

    const categoriesNews = useLoaderData()
    
    return (
        <div>
            <h2>THis is categories {categoriesNews.length} </h2>

            {
                categoriesNews.map(news => <NewsSummarycart key ={news._id} news = {news}></NewsSummarycart>)
            }

        </div>
    );
};

export default Categorie;