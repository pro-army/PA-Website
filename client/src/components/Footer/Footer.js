import React from 'react'
import '../css/footer.css'
import GoogleIcon from '../../image_assets/login-signup/GoogleIcon.svg'
import FacebookIcon from '../../image_assets/login-signup/FacebookIcon.svg'
import LinkedinIcon from '../../image_assets/login-signup/LinkedinIcon.svg'
import TelegramIcon from '../../image_assets/login-signup/TelegramIcon.svg'
import YoutubeIcon from '../../image_assets/login-signup/YoutubeIcon.svg'
import GithubIcon from '../../image_assets/login-signup/GithubIcon.svg'
import TwitterIcon from '../../image_assets/login-signup/TwitterIcon.svg'

function Footer() {
    return (
        <div className='footer'>
            <div Style='font-family:Montserrat;font-weight:700;'>Follow us on</div>
            <div>
                <a href='mailto:programmersarmy@gmail.com'>
                    <img src={GoogleIcon} alt='google' />
                </a>
                <a href='https://www.facebook.com/Programmers-Army-105809441239783'>
                    <img src={FacebookIcon} alt='facebook' />
                </a>
                <a href='https://t.me/programmersarmy'>
                    <img src={TelegramIcon} alt='telegram' />
                </a>
                <a href='https://www.youtube.com/channel/UCRJS3O94F8cOj2U0gOUwmBA'>
                    <img src={YoutubeIcon} alt='youtube' />
                </a>
                <a href='https://www.linkedin.com/company/programmer-sarmy'>
                    <img src={LinkedinIcon} alt='Linkedin' />
                </a>
                <a href='https://twitter.com/ProgrammingArmy'>
                    <img src={TwitterIcon} alt='Twitter' />
                </a>
                <a href='https://github.com/pro-army'>
                    <img src={GithubIcon} alt='Github' />
                </a>
            </div>
            <div Style='font-family:Montserrat;font-weight:300;'>Copyright © Programmers Army All rights reserved 2020</div>
        </div>
    )
}

export default Footer
