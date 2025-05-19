import React from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <TopRecipes></TopRecipes>
            </div>
        </div>
    );
};

export default Home;