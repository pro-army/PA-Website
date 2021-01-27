import React from 'react'
import '../css/related-videos.css'
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'

const use_styles = makeStyles({
    'related-videos-share-icon': {
        fontSize: '3vw',
        marginLeft: '2vw',
    },
})

export default function Related_Videos() {
    const classes = use_styles();
    return (
        <div className='related-videos-all'>
            <div className='related-videos-videos-description-share-icon'>
                <div className='related-videos'>
                    <ReactPlayer className='related-videos-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                    <div className='related-videos-title-description-creator'>
                        <div className='related-videos-title'>
                            Video Title 
                        </div>
                        <div className='related-videos-description-creator'>
                            Small description
                        </div>
                        <div className='related-videos-description-creator' Style='margin-top:5vh;'>
                            Creator of video
                        </div>
                        <div className='related-videos-description-creator'>
                            By Programmers Army
                        </div>
                    </div>
                </div>
                <ShareIcon className={classes['related-videos-share-icon']} /> 
            </div>
            <div className='related-videos-videos-description-share-icon'>
                <div className='related-videos'>
                    <ReactPlayer className='related-videos-videos' url='https://youtu.be/smK9dgdTl40' controls={true} />
                    <div className='related-videos-title-description-creator'>
                        <div className='related-videos-title'>
                            Video Title 
                        </div>
                        <div className='related-videos-description-creator'>
                            Small description
                        </div>
                        <div className='related-videos-description-creator' Style='margin-top:5vh;'>
                            Creator of video
                        </div>
                        <div className='related-videos-description-creator'>
                            By Programmers Army
                        </div>
                    </div>
                </div>
                <ShareIcon className={classes['related-videos-share-icon']} /> 
            </div>
        </div>
    )
}