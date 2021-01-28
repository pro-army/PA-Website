import React, {useState, useLayoutEffect, useEffect} from 'react'
import './Articles.css'

function Articles(props) {
  const numOfArticles = props.numOfArticles;
  const [maxArticles, changeMaxArticles] = useState(6);
  const [articleDesign, changeArticleDesign] = useState({});
  const [imageDesign, changeImageDesign] = useState({});
  const [h6Design, changeh6Design] = useState({});
  const [pDesign, changepDesign] = useState({});

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if(window.innerWidth <= 661){
      changeMaxArticles(2);
      changeArticleDesign({
        height : "150px",
        width : "120px"
      });
      changeImageDesign({
        height: "80px"
      })
      changeh6Design({
        "font-size": "10px"
      })
      changepDesign({
        "font-size": "8px"
      })
    }
    else if(window.innerWidth <= 759){
      changeMaxArticles(3);
      changeArticleDesign({
        height : "auto",
        width : "auto"
      });
      changeImageDesign({
        height: "13vw"
      })
      changeh6Design({
        "font-size": "1.5vw"
      })
      changepDesign({
        "font-size": "1.1vw"
      })
    }
    else{
      changeMaxArticles(6);
      changeArticleDesign({
        height : "auto",
        width : "auto"
      });
      changeImageDesign({
        height: "13vw"
      })
      changeh6Design({
        "font-size": "1.5vw"
      })
      changepDesign({
        "font-size": "1.1vw"
      })
    }
  }
  
  // const allArticles = () => 
  // props.articles.map(article => (
  //   <div className = "article">
  //     <div className = "article-img"></div>
  //       <div className = "article-content">
  //           <h6>Two lines for topic name section</h6>
  //           <p>A small description related to current topic</p>
  //       </div>
  //     <div className = "rating">4.3</div>
  //   </div>
  // ));

  const allArticles = () => {
    var articles = []
    for(var i = 0; i<maxArticles && i<numOfArticles; i++){
      articles.push(
        <div class = "article" style = {articleDesign}>
            <div class = "article-img" style = {imageDesign}></div>
            <div class = "article-content">
                <h6 style = {h6Design}>Two lines for topic name section</h6>
                <p style = {pDesign}>A small description related to current topic</p>
            </div>
            <div class = "rating">4.3</div>
        </div>
      )
    }
    return articles;
  }

  return (
    <div class = "right-section">
      <div class = "design-block"></div>
      <div className = "articles">
          {
            allArticles()
          }
      </div>
    </div>
  )
}

export default Articles
