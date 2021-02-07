// section that contains top articles

import React, {useState,useEffect} from 'react'
import axios from 'axios';
import SliderTutorial from './SliderTutorial.js'
import Articles from './Articles'
import './ArticlesSection.css'

function ArticlesSection() {
    // object array that will store all the domains
    const [domains, setDomains] = useState([])
    // array that contains name of domains
    const [content, setContent] = useState([])
    // array that contains ids of respective contents. This array is used to send id to Articles
    // component to fetch articles of that particular domain.
    const [domainIds, setDomainIds] = useState([])
    // variable that stores index of currently selected domain
    const [currDiv, changeDiv] = useState("0")
    // variable that stores height of articles section. This will be changed on change of browser size.
    const [contentHeight, changeContentHeight] = useState("50vw");

  useEffect(async () => {
    // fetching domain data and uploading domains state
    axios.get("https://programmers-army-dev-backend.herokuapp.com/api/article/domains")
    .then(res=>{
      setDomains(res.data.domains)
    })
    .catch(err=>{
      console.log(err)
    })
  }, []);

  useEffect(() => {
    // storing ids and domains names in their respective arrays
    setContent([])
    setDomainIds([])
    Object.keys(domains).forEach(key => setContent(arr => [...arr, domains[key].title]))
    Object.keys(domains).forEach(key => setDomainIds(arr => [...arr, domains[key]._id]))
  }, [domains]);

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    }, []);

    // function to change size of articles section on change of browser size
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

                  {/* main slider to change domain */}
                  <SliderTutorial change = {changeDiv} content = {content}/>
                </div>

                {/* articles section that show articles related to selected domain */}
                <Articles domain_id = {domainIds[currDiv]}/>
            </div>
        </div>
    )
}

export default ArticlesSection
