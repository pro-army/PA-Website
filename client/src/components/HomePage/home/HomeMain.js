import React, {useState} from 'react'
import Introduction from './Introduction'
import ArticlesSection from './ArticlesSection'
import UpcomingActivities from './UpcomingActivities'
import './HomeMain.css'
// import PaFeatures from './PaFeatures'

function HomeMain() {

    return (
        <div id = "homepage">
            <Introduction />
            <ArticlesSection />
            <UpcomingActivities />
            <div class = "footer" style = {{height:"300px", background:"#0f2f63"}}></div>
            {/* <PaFeatures /> */}
        </div>
    )
}

export default HomeMain