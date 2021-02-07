// component to create first section of home page

import React from 'react'
import './Introduction.css'
import PaFeatures from './PaFeatures'

function Introduction() {
    return (
        <div id = "introduction">
            <div id = "top-section">
                <div id = "welcome-msg">
                    <div class = "text">
                        <div>
                            <span class = "welcome">Welcome To</span><br/>
                            <span class = "name">Programmers Army</span>
                        </div>
                        <div class = "lines">
                            Write something nice here using these two lines
                        </div>
                    </div>
                    <div class = "search">
                        <input type = "text" placeholder = "Search for programming resources" />
                        <button>Search</button>
                    </div>
                </div>
            </div>

            {/* slider that contains all features of PA */}
            <PaFeatures /> 
            <a href = "#articles-section">
                <div id = "arrow">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </a>
        </div>
    )
}

export default Introduction