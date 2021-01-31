import React from 'react'
import '../css/profile_page.css'
import profilepage_article_videos from './profilepage_article_videos'


export default function Profile_page() {
    return (
        <div className='main-container'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');</style>
            <div className='upper-background' />
            <div className='details-block'>
                <div className='left-details-block'>
                    <div Style='display:flex;'>
                        <div className='profile-pic' Style='padding:0.3vw;padding-left:0.5vw;padding-right:0.4vw;box-shadow: 0 0 8px -4px rgba(0,0,0,.5);'>
                            <img className='profile-pic' src="https://img.icons8.com/color/96/000000/circled-user-female-skin-type-4--v2.png" alt='pic' />
                        </div>
                        <div className='profile-name-username' Style='display:flex;flex-direction:column;'>
                            <div className='profile-name'>Actual Name</div>
                            <div className='profile-username'>username</div>
                        </div>
                    </div>
                    <p>Pa Badge
                    <img className='profile-companies-logo' src="https://img.icons8.com/ios/100/000000/new-post.png" alt='Email' />
                    <img className='profile-companies-logo' src='https://www.flaticon.com/svg/vstatic/svg/2111/2111532.svg?token=exp=1611047398~hmac=34731a6f00289173d5d59bc913e6b391' alt='linkedin' />
                    <img className='profile-companies-logo' src='https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1611047455~hmac=a780eb73d0b4d68dad8d19253b9326b9' alt='Github' />
                    </p>
                </div>

                <div className='right-details-block'>
                    <div className='articles-block'>
                        <profilepage_article_videos title={'article'} fullname='adarsh' />
                    </div>
                    <div className='videos-block'>
                        <profilepage_article_videos title={'videos'} fullname='adarsh' />
                    </div>
                </div>
            </div>
        </div>
    )
}