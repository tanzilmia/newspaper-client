import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummarycart from '../Sheared/NewsSummaryCart/NewsSummarycart';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>This is Home component {allNews.length} </h2>
            {
                allNews.map(news => <NewsSummarycart news = {news} key={news._id}></NewsSummarycart>)
            }
        </div>
    );
};

export default Home;