import React from 'react'
import {Link} from 'react-router-dom'
import '../css/profilepage_article_videos.css'
import ReactPlayer from 'react-player'
 
export default function ProfilePageArticleVideos({title,fullname,articles_link,videos_link}) {
    // const article_array = [];
    const videos_array = ['how to cope up'];
    return (
        <div className='right-details-block-heading-description-container'>
            <div className='right-details-block-heading'>{title}</div>
            <div className='right-details-block-description'>Following are the {title} contributed by <p>{fullname}</p></div>
            {
                title==="Videos" ?
                (
                    <ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                    // videos_array.map((link,id)=> {

                        // return (<ReactPlayer className='right-details-block-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                        // )})
                    // <div className='right-details-block-videos-container'>
                    //     {
                    //         videos_link.map((video_link)=><ReactPlayer className='right-details-block-videos' url={video_link} controls={true} />)
                    //     }
                    //     </div>
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
                        <Link to=''><div className='right-details-block-profilepage-articles-block'>Mission to androm edadad  eqwe qwe wqe qw eqw e qwe qw e</div></Link>
                        {/* {
                            articles_link.map(()=><Link to=''><div className='right-details-block-profilepage-articles-block'>Mission to androm edadad  eqwe qwe wqe qw eqw e qwe qw e</div></Link>)
                        } */}

                    </div>
                )
            }
        </div>
    )
}