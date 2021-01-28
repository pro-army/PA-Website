import React from 'react'
import '../css/discussion.css'
import '../css/article_page.css'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import discussion_alt_profile_picture from '../../image_assets/discussion/Discussion_alt_profile_pic.svg';
import response_icon from '../../image_assets/discussion/response.svg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { FaCommentDots } from 'react-icons/fa';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const use_styles = makeStyles((theme) => ({
      author_profile_picture : {
        maxWidth: '5vw',
        maxHeight: '5vh',
        objectFit: 'cover',
      },
      author_name_date: {
          alignItems: 'left',
        justifyContent: 'left',
        display: 'flex',
        flexDirection: 'column',
      },
      author_name: {
          display: 'flex',
        fontFamily: 'Montserrat',
        fontWeight: '800',
        fontSize: '2vh',
      },
      date: {
        display: 'flex',
      },
      author_profile_picture : {
        width: theme.spacing(5),
        height: theme.spacing(5),
        objectFit: 'cover',
      },
      ArrowUpwardIconStyle: {
          padding: '0.5vw',
          mrginRight:'10vw',
          borderRadius: '10px',
          color: 'white',
        backgroundColor: '#05386B',
      },
      ArrowDownwardIconStyle: {
        padding: '0.5vw',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: '#05386B',
      },
      ResponseIconStyle: {
        // padding: '0.5vw',
        paddingBottom: '0.5vh',
        borderRadius: '10px',
        width: '2.3vw',
        height: '2.3vw',
      },
      SendIconStyle: {
        padding: '0.5vw',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: '#05386B',
      },
      'button-clear-post-style' : {
          color: 'black',
          backgroundColor: '#62F2AD',
          fontFamily: 'Montserrat',
          fontWeight: '600',
      }
}));

export default function Discussion() {
    const classes = use_styles();
    const profile_pic = '';
    return (
        <>
        <div className='discussion-profile-container'>
            <div className='discussion-profile-content'>
                <div className='discussion-profile-details-icons'>
                    <div className='discussion-profile-details'>
                        {profile_pic.length ? <img className={classes.AccountCircleIconStyle} {...classes.author_profile_picture} src={profile_pic} alt='profile' /> : 
                        <img className={classes.author_profile_picture} src={discussion_alt_profile_picture} alt='profile' />}
                        <div className={classes.author_name_date}>
                            <div className={classes.author_name}>Author Name</div>
                            <div className={classes.date}>dd/dd/dddd <p className={classes.date}>time</p></div>
                        </div>
                    </div>
                    <div className='discussion-details'>The content of comment goes here. The replies of this comment will be hidden unless the user wants to view the thread. For that, user will need to click on  the view replies button. That will expand the section below this comment and its replies will be visible. Also if someone wants to give reply to  a particular reply, then it can be done by tagging the user by using @ before the username. Also, a comment will have option of being upvoted or downvoted.
                    </div>
                    <div className='discussion-icons'>
                        <ArrowUpwardIcon className={classes.ArrowDownwardIconStyle} />
                        <ArrowDownwardIcon className={classes.ArrowDownwardIconStyle} />
                        <img src={response_icon} className={classes.ResponseIconStyle} />
                        <SendIcon className={classes.SendIconStyle} />
                    </div>
                </div>
            </div>
            <div className='discussion-profile-content'>
                <div className='discussion-profile-details-icons'>
                    <div className='discussion-profile-details'>
                        {profile_pic.length ? <img className={classes.AccountCircleIconStyle} {...classes.author_profile_picture} src={profile_pic} alt='profile' /> : 
                        <img className={classes.author_profile_picture} src={discussion_alt_profile_picture} alt='profile' />}
                        <div className={classes.author_name_date}>
                            <div className={classes.author_name}>Author Name</div>
                            <div className={classes.date}>dd/dd/dddd <p className={classes.date}>time</p></div>
                        </div>
                    </div>
                    <div className='discussion-details'>The content of comment goes here. The replies of this comment will be hidden unless the user wants to view the thread. For that, user will need to click on  the view replies button. That will expand the section below this comment and its replies will be visible. Also if someone wants to give reply to  a particular reply, then it can be done by tagging the user by using @ before the username. Also, a comment will have option of being upvoted or downvoted.
                    </div>
                    <div className='discussion-icons'>
                        <ArrowUpwardIcon className={classes.ArrowDownwardIconStyle} />
                        <ArrowDownwardIcon className={classes.ArrowDownwardIconStyle} />
                        <img src={response_icon} className={classes.ResponseIconStyle} />
                        <SendIcon className={classes.SendIconStyle} />
                    </div>
                </div>
            </div>
            <div className='discussion-profile-content'>
                <div className='discussion-profile-details-icons'>
                    <div className='discussion-profile-details'>
                        {profile_pic.length ? <img className={classes.AccountCircleIconStyle} {...classes.author_profile_picture} src={profile_pic} alt='profile' /> : 
                        <img className={classes.author_profile_picture} src={discussion_alt_profile_picture} alt='profile' />}
                        <div className={classes.author_name_date}>
                            <div className={classes.author_name}>Author Name</div>
                            <div className={classes.date}>dd/dd/dddd <p className={classes.date}>time</p></div>
                        </div>
                    </div>
                    <div className='discussion-details'>The content of comment goes here. The replies of this comment will be hidden unless the user wants to view the thread. For that, user will need to click on  the view replies button. That will expand the section below this comment and its replies will be visible. Also if someone wants to give reply to  a particular reply, then it can be done by tagging the user by using @ before the username. Also, a comment will have option of being upvoted or downvoted.
                    </div>
                    <div className='discussion-icons'>
                        <ArrowUpwardIcon className={classes.ArrowDownwardIconStyle} />
                        <ArrowDownwardIcon className={classes.ArrowDownwardIconStyle} />
                        <img src={response_icon} className={classes.ResponseIconStyle} />
                        <SendIcon className={classes.SendIconStyle} />
                    </div>
                </div>
            </div>
            <div className='discussion-profile-content'>
                <div className='discussion-profile-details-icons'>
                    <div className='discussion-profile-details'>
                        {profile_pic.length ? <img className={classes.AccountCircleIconStyle} {...classes.author_profile_picture} src={profile_pic} alt='profile' /> : 
                        <img className={classes.author_profile_picture} src={discussion_alt_profile_picture} alt='profile' />}
                        <div className={classes.author_name_date}>
                            <div className={classes.author_name}>Author Name</div>
                            <div className={classes.date}>dd/dd/dddd <p className={classes.date}>time</p></div>
                        </div>
                    </div>
                    <div className='discussion-details'>The content of comment goes here. The replies of this comment will be hidden unless the user wants to view the thread. For that, user will need to click on  the view replies button. That will expand the section below this comment and its replies will be visible. Also if someone wants to give reply to  a particular reply, then it can be done by tagging the user by using @ before the username. Also, a comment will have option of being upvoted or downvoted.
                    </div>
                    <div className='discussion-icons'>
                        <ArrowUpwardIcon className={classes.ArrowDownwardIconStyle} />
                        <ArrowDownwardIcon className={classes.ArrowDownwardIconStyle} />
                        <img src={response_icon} className={classes.ResponseIconStyle} />
                        <SendIcon className={classes.SendIconStyle} />
                    </div>
                </div>
            </div>
            <div className='discussion-profile-content'>
                <div className='discussion-profile-details-icons'>
                    <div className='discussion-profile-details'>
                        {profile_pic.length ? <img className={classes.AccountCircleIconStyle} {...classes.author_profile_picture} src={profile_pic} alt='profile' /> : 
                        <img className={classes.author_profile_picture} src={discussion_alt_profile_picture} alt='profile' />}
                        <div className={classes.author_name_date}>
                            <div className={classes.author_name}>Author Name</div>
                            <div className={classes.date}>dd/dd/dddd <p className={classes.date}>time</p></div>
                        </div>
                    </div>
                    <div className='discussion-details'>The content of comment goes here. The replies of this comment will be hidden unless the user wants to view the thread. For that, user will need to click on  the view replies button. That will expand the section below this comment and its replies will be visible. Also if someone wants to give reply to  a particular reply, then it can be done by tagging the user by using @ before the username. Also, a comment will have option of being upvoted or downvoted.
                    </div>
                    <div className='discussion-icons'>
                        <ArrowUpwardIcon className={classes.ArrowDownwardIconStyle} />
                        <ArrowDownwardIcon className={classes.ArrowDownwardIconStyle} />
                        <img src={response_icon} className={classes.ResponseIconStyle} />
                        <SendIcon className={classes.SendIconStyle} />
                    </div>
                </div>
            </div>
        </div>
        <div className='discussion-post-container'>
            <textarea className='discussion-post-textarea' />
            <div className='button-clear-post-style-container'>
                <Button className={classes['button-clear-post-style']}>Clear</Button>
                <Button className={classes['button-clear-post-style']}>Post</Button>
            </div>
        </div>
        </>
    )
}