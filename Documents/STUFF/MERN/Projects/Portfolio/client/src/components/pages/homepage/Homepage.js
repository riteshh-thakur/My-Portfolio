import React, { Suspense } from 'react';
import classes from './css/Homepage.module.css';
import SkillSet from '../../skillset/SkillSet';
import Experience from '../../experience/Experience';
import Education from '../../education/Education';
import Intropage from '../../intropage/Intropage';
import { useTheme } from 'stelios';
import Loader from '../../Loader/Loader';
import { useWindowSize } from '../../../hooks/use-windowsize';







const Homepage = () => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width < 400;
    const colorPalette = useTheme().theme.colorPalette;

   

    return (
        <div className={classes.homepage} style={{backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "#202124"}}>
            <Suspense fallback={<div style={{height: isMobile ? "400px" : "600px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><Loader/></div>}>
                <Intropage/>
                
                
                <Experience/>
                <SkillSet title="High Rated Skills" time="latest" limit="6" />
                <Education/>
            </Suspense>
        </div>
    )
};

export default Homepage;





