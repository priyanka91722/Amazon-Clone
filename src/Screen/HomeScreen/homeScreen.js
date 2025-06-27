import React from 'react';
import './homeScreen.css';
import HomeBanner from './HomeBanner/homeBanner';
import HomeDetails from './HomeDetails/homeDetails';

const HomeScreen = () => {
    return(
        <div className="homeScreen">
            <HomeBanner />
            <HomeDetails />
        </div>
    )
}

export default HomeScreen