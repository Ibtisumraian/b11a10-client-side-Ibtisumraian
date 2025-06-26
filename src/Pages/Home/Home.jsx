import React, { use, useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import TopRecipes from '../../components/TopRecipes/TopRecipes';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../components/AuthContext/AuthContext';
import TeamPreview from '../../components/TeamPreview/TeamPreview';
import { motion } from "framer-motion";
import FoodBankSection from '../../components/FoodBankSection/FoodBankSection';

const Home = () => {
    const { theme } = use(AuthContext)
    const topRecipes = useLoaderData()
    
     useEffect(() => {
         window.scrollTo(0, 0)        
     }, [])

    return (
        <div className={` ${theme == "dark" && "bg-[#0f1b28]"}`}>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <TopRecipes topRecipes={topRecipes}></TopRecipes>
            </div>
            
            <div>
                <FoodBankSection theme={theme}/>
            </div>

    
            <div>
                <TeamPreview theme={theme}/>
            </div>
        </div>
    );
};

export default Home;