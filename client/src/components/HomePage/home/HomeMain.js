import React, {useState} from 'react'
import Introduction from './Introduction'
import ArticlesSection from './ArticlesSection'
import UpcomingActivities from './UpcomingActivities'
import './HomeMain.css'

function HomeMain() {

    return (
        <div id = "homepage">
            {/* first section that includes introduction of programmers army and features */}
            <Introduction />

            {/* second section that contains article domains and their respective top articles */}
            <ArticlesSection />

            {/* third section that contains upcoming webinars and contests */}
            <UpcomingActivities />

            {/* footer section */}
            <div class = "footer" style = {{height:"300px", background:"#0f2f63"}}></div>
        </div>
    )
}

export default HomeMain
