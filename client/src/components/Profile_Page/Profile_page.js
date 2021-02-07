import React,{useContext} from 'react' 
import '../css/profile_page.css'
import ProfilePageArticleVideos from './ProfilePageArticleVideos'
import {userProfileDataContext} from '../../App'
import LinkedinIcon from '../../image_assets/login-signup/DarkLinkedinIcon.svg'
import GithubIcon from '../../image_assets/login-signup/GithubIcon.svg'
import ProfilePic from '../../image_assets/profile-page/profile-pic.svg'

export default function Profile_page() {
    const userprofileDataContext = useContext(userProfileDataContext);
    return (
        <div className='main-container'>
            <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');</style>
            <div className='upper-background' />
            <div className='details-block'>
                <div className='left-details-block'>
                    <div Style='display:flex;'>
                        <div className='profile-pic'>
                            <img src={ProfilePic} alt='pic' />
                        </div>
                        <div className='profile-name-username' Style='display:flex;flex-direction:column;'>
                            <div className='profile-name'>Actual Name</div>
                            <div className='profile-username'>username</div>
                        </div>
                    </div>
                    <p className='profile-companies-logo-container'>
                        {<span>Pa Badge</span>}
                        <img className='profile-companies-logo' src="https://img.icons8.com/ios/100/000000/new-post.png" alt='Email' />
                        <img className='profile-companies-logo' src={LinkedinIcon} alt='linkedin' />
                        <img className='profile-companies-logo' src={GithubIcon} alt='Github' />
                    </p>
                    <hr Style='border-top: 2px solid black;' />
                    <div className='left-details-block-about'>
                        <div className='left-details-block-sub-headings'>About</div>
                        <div className='left-details-block-sub-headings-details'>Some textndjkqekqjwekqwbekbqwkebq nekqwnekjqnw e qwne qwne kqwnekqwnek nqwkne kqne </div>
                        <hr className='hr-line' Style='border-top:dashed;'/>
                        <p className='left-details-block-sub-headings-details'><img className='left-details-block-sub-headings-details-flag' src='' alt='flag' /> Country</p>
                        <div className='left-details-block-sub-headings-details'>College Name</div>
                        <div className='left-details-block-sub-headings-details'>Year of grad</div>
                    </div>
                    <hr Style='border-top: 2px solid black;' />
                    <div className='left-details-block-contributions'>
                        <div className='left-details-block-sub-headings'>Contributions</div>
                        <p><span className='left-details-block-sub-headings-details'>Articles</span><span Style='border-left:2px solid black;height:1vw;'></span><span className='left-details-block-sub-headings-details'>Value1</span></p>
                        <hr className='hr-line' />
                        <p><span className='left-details-block-sub-headings-details'>Videos</span><span Style='border-left:2px solid black;height:1vw;'></span><span className='left-details-block-sub-headings-details'>Value1</span></p>
                    </div>
                    <hr Style='border-top: 2px solid black;' />
                    <div className='left-details-block-badges-earned'>
                        <p className='left-details-block-sub-headings'>Badges Earned</p>
                        <div className='left-details-block-badges-earned-images-container'>
                            <img className='left-details-block-badges-earned-images' src='' alt='badge' />
                            <img className='left-details-block-badges-earned-images' src='' alt='badge' />
                            <img className='left-details-block-badges-earned-images' src='' alt='badge' />
                            <img className='left-details-block-badges-earned-images' src='' alt='badge' />
                        </div>
                    </div>
                </div>

                <div className='right-details-block'>
                    <div className='articles-block'>
                        <ProfilePageArticleVideos title={'Articles'} fullname={'adarsh'} /> 
                    </div>
                    <div className='videos-block'>
                        <ProfilePageArticleVideos title={'Videos'} fullname={'adarsh'} />
                    </div>
                    <div className='bookmarked-articles-block'>
                        <ProfilePageArticleVideos title={'Bookmarked Articles'} fullname={'adarsh'} />
                    </div>
                    <div className='todo-list-block'>
                        <ProfilePageArticleVideos title={'Your To-Do list'} fullname={'adarsh'} />
                    </div>
                </div>
            </div>
        </div>
    )
}