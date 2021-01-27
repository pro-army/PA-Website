import React, {useState,useEffect} from 'react'
import './ArticlesSection.css'
import SliderTutorial from './SliderTutorial.js'
import Articles from './Articles'

function ArticlesSection() {
    const content = ["Data Structures", "Algorithms", "Dynamic Programming",
     "Bit Manipulation", "Number Theory", "Graphs", "Trees"]

    const [currDiv, changeDiv] = useState("initial div")
    const [contentHeight, changeContentHeight] = useState("50vw");

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        if(window.innerWidth <= 759){
          changeContentHeight("34vw");
        }
        else{
          changeContentHeight("50vw");
        }
    };

    return (
        <div id = "articles-section">
            <h2 class = "section-heading">Articles</h2>
            <div class = "content" style = {{height: contentHeight}}>
                <div class = "left-section">
                    <SliderTutorial change = {changeDiv} content = {content}/>
                        <div>
                            {
                                content[currDiv]
                            }
                        </div>

                </div>
                    <Articles numOfArticles = "5"/>
            </div>
        </div>
    )
}

export default ArticlesSection