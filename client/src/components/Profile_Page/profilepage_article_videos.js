import React from 'react'
import {Link} from 'react-router-dom'

function profilepage_article_videos({title,fullname}) {
    const article_array = [{'how to cope up':'bla'}];
    const videos_array = ['how to cope up'];
    return (
        <div>
            <div>{title}</div>
            <div>Following are the {title} contributed by <p>{fullname}</p></div>
            <div>
                {
                    {title}==='article' ? 
                    (
                            article_array.map((article_title,link)=> {
                                return (
                                <Link to={link}>
                                    <div className='profilepage-articles_block'>
                                        <p>{article_title}</p>
                                    </div>        
                                </Link>
                            );
                        })
                    )
                    : 
                    (
                        videos_array.map((link,id)=> {
                            return (<iframe title={id} className='profilepage-videos_block' src="https://www.youtube.com/embed/skWWN8rHqQ4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        )})
                    )
                }
            </div>
        </div>
    )
}

export default profilepage_article_videos