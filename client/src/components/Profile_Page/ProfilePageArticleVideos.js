import React from 'react'
import {Link} from 'react-router-dom'
import '../css/profilepage_article_videos.css'
import ReactPlayer from 'react-player'
 
export default function ProfilePageArticleVideos({title,fullname}) {
    // const article_array = [];
    // const videos_array = ['how to cope up'];
    return (
        <div className='right-details-block-heading-description-container'>
            <div className='right-details-block-heading'>{title}</div>
            <div className='right-details-block-description'>Following are the {title} contributed by <p>{fullname}</p></div>
            {
                {title}=='Videos' ? 
                (
                    // videos_array.map((link,id)=> {
                    //     return (<ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                    //     )})
                    <div className='right-details-block-videos-container'>
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />

                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />

                    </div>
                )
                :
                (
                        // article_array.map((article_title,link)=> {
                        //     return (
                        //     <Link to={link}>
                        //         <div className='profilepage-articles_block'>
                        //             <p>{article_title}</p>
                        //         </div>        
                        //     </Link>
                        // );
                    // })
                    <div className='right-details-block-article-container'>
                        <Link to=''>
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        

                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        

                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        
                            <div className='right-details-block-profilepage-articles-block'>
                                Mission to andromeda
                            </div>        

                        </Link>
                    </div>
                )
                
            }
        </div>
    )
}