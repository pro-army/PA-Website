import React, {useState} from 'react'
import SearchBar from "material-ui-search-bar";
import '../css/article_page.css'
import {Link} from 'react-router-dom'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {Route, Switch ,BrowserRouter as Router} from "react-router-dom";
import Related_Videos from './Related_Videos';
import Discussion from './Discussion';
import Description from './Description';
import {FcCollapse} from 'react-icons/fc';

<style>
@import url('https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
</style>

const use_styles = makeStyles({
    bookmarkStyle: {
        color: '#62F2AD',
        paddingLeft: '0.8vh',
        fontSize: '2vw',
    },
    todoStyle: {
        color: '#62F2AD',
        paddingLeft: '0.8vh',
        fontSize: '2vw',
    },
    searchbarStyle: {
        borderRadius: '15px',
        width: '12vw',
        backgroundColor: '#62F2AD',
        marginTop: '5vh',
        marginBottom: '1vh',
    },
    rating: {
        color: '#62F2AD',
        fontSize: '2.5vw',
        paddingLeft: '0.8vw',
    },
    article_related_vids_discuss_nav_button: {
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
        borderRadius: '20px',
        padding: '1vh',
    },
    article_related_vids_discuss_nav_button_active: {
        fontFamily: 'Inter',
        padding: '1vw',
        fontSize: '3vh',
        backgroundColor: '#05386B',
        color: 'white',
        fontWeight: '800',
        marginLeft: '1vw',
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
        borderRadius: '25px 25px 0px 0px',
        transition: 'all 1.5s',
    },
    article_related_vids_discuss_nav_button_inactive: {
        fontFamily: 'Inter',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '2vh',
        padding: '1vw',
        fontWeight: '800',
        cursor: 'pointer',
        marginLeft: '1vw',
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
        borderRadius: '25px 25px 0px 0px',
        transition: 'all 1.5s',
    },
    article_page_main_left_container_active: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
        alignItems: 'left',
        cursor: 'pointer',
        padding: '1vh',
        paddingTop: '1.5vh',
        width: '15vw',
        transition: 'all 1.5s',
    },
    article_page_main_left_container_inactive: {
        visibility: 'hidden',
        width: '4vw',
        transition: 'all 1.5s',
    },
    article_page_button_style: {
        display: 'flex',
        borderRadius: '50px',
        width: '5vw',
        padding: '0px',
    },
    badgeStyle: {
        fontSize: '5vh',
        backgroundColor: 'white',
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
    },
    badgeStyleActive: {
        borderRadius: '25px',
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
        marginLeft: '-5vw',
        cursor: 'pointer',
        fontSize: '2vw',
        transform: 'rotate(-90deg)',
        transition: 'all 1.5s'
      },
      badgeStyleInactive: {
        borderRadius: '25px',
        boxShadow: '0 0 8px -4px rgba(0,0,0,.5)',
        marginLeft: '-5vw',
        cursor: 'pointer',
        fontSize: '2vw',
        transform: 'rotate(90deg)',
        transition: 'all 1.5s'
      },
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
        fontSize: '3vh',
      },
      date: {
        display: 'flex',
      },
      profile_picture: {
        marginRight: '0.5vw',
        color: 'black',
      },
      article_page_main_right_container_content_social_icon: {
        fontSize: '2.5vw',
      },
      'link-active': {
          color: 'white',
      },
      'link-inactive': {
        color: 'white',
    }
});

export default function Article_page() {
    const classes = use_styles();

    const [navStyle_article,setNavStyleArticle] = useState(classes.article_related_vids_discuss_nav_button_active);
    const [navStyle_videos,setNavStyleVideos] = useState(classes.article_related_vids_discuss_nav_button_inactive);
    const [navStyle_discuss,setNavStyleDiscuss] = useState(classes.article_related_vids_discuss_nav_button_inactive);
    const [linkStyle,setLinkStyle] = useState(classes['link-active']);
    const [ArticlePageMainLeftContainerBadgeStyle,setStateArticlePageMainLeftContainerBadgeStyle] = useState(classes.badgeStyleActive);
    const [ArticlePageMainLeftContainer,setArticlePageMainLeftContainerVisibility] = useState(classes.article_page_main_left_container_active);
    // const circle = <div className={clsx(classes.shape, classes.shapeCircle)} ><p className={classes.badgeText}>{ArticlePageMainLeftContainerText}</p></div>;

    function ArticlePageMainLeftContainerVisibility(e)
    {
        e.preventDefault();
        if(ArticlePageMainLeftContainerBadgeStyle===classes.badgeStyleActive)
        {
            setArticlePageMainLeftContainerVisibility(classes.article_page_main_left_container_inactive);
            setStateArticlePageMainLeftContainerBadgeStyle(classes.badgeStyleInactive);
        }
        else
        {
            setArticlePageMainLeftContainerVisibility(classes.article_page_main_left_container_active);
            setStateArticlePageMainLeftContainerBadgeStyle(classes.badgeStyleActive);
        }
    }

    function setNavSelectionStyle(e,field)
    {
        e.preventDefault();
        switch(field)
        {
            case 'article':
                setNavStyleArticle(classes.article_related_vids_discuss_nav_button_active);
                setNavStyleVideos(classes.article_related_vids_discuss_nav_button_inactive);
                setNavStyleDiscuss(classes.article_related_vids_discuss_nav_button_inactive);
                break;
            case 'videos':
                setNavStyleArticle(classes.article_related_vids_discuss_nav_button_inactive);
                setNavStyleVideos(classes.article_related_vids_discuss_nav_button_active);
                setNavStyleDiscuss(classes.article_related_vids_discuss_nav_button_inactive);
                break;
            case 'discuss':
                setNavStyleArticle(classes.article_related_vids_discuss_nav_button_inactive);
                setNavStyleVideos(classes.article_related_vids_discuss_nav_button_inactive);
                setNavStyleDiscuss(classes.article_related_vids_discuss_nav_button_active);
                break;
            default:
        }
    }

    return (
        <Router>
        <div className='article-page-main-container'>
                    <div className={ArticlePageMainLeftContainer}>
                        <div className='article-page-main-left-container-search-box'>
                            <SearchBar className={classes.searchbarStyle} />
                            <Link to='#' Style='text-decoration:none;'><div className='article-page-main-left-container-topic-names'>Topic 1 name</div></Link>
                            <Link to='#' Style='text-decoration:none;'><div className='article-page-main-left-container-topic-names'>Topic 1</div></Link>
                        </div>
                        <div className='article-page-main-left-container-todo-bookmark-rate-box'>
                            <div className='article-page-main-left-container-todo-bookmark-rate-box-text'>Addthis to you to do list <EventNoteIcon className={classes.todoStyle} /></div>
                            <div className='article-page-main-left-container-todo-bookmark-rate-box-text'>Addthis to you to do list <BookmarkBorderIcon className={classes.bookmarkStyle} /></div>
                            <div className='article-page-main-left-container-todo-bookmark-rate-box-text'>Rate this article</div>
                            <Rating max={5} className={classes.rating} />
                        </div>
                    </div>
                <div className='article-page-main-right-container'>
                    <div className='article-related-videos-discuss' Style='margin-left:2vw;'>
                        <FcCollapse className={ArticlePageMainLeftContainerBadgeStyle} onClick={(e) => ArticlePageMainLeftContainerVisibility(e)} />
                        <p>
                            <span className={navStyle_article} {...classes.article_related_vids_discuss_nav_button} onClick={(e) => setNavSelectionStyle(e,'article')}>
                                <Link to='/article-page' Style='text-decoration:none;' className=''>
                                        Article
                                </Link>
                            </span>
                            <span className={navStyle_videos} {...classes.article_related_vids_discuss_nav_button} onClick={(e) => setNavSelectionStyle(e,'videos')}>
                                <Link to='/article-page/related-videos' Style='text-decoration:none;'>
                                    Related Videos
                                </Link>
                            </span>
                            
                            <span className={navStyle_discuss} {...classes.article_related_vids_discuss_nav_button} onClick={(e) => setNavSelectionStyle(e,'discuss')}>
                                <Link to='/article-page/discussion' Style='text-decoration:none;'>
                                    Discuss
                                </Link>
                            </span>
                            
                        </p>
                    </div>
                    <div className='article-page-main-right-container-content'>
                        <div className='article-page-main-right-container-content-topic-name-share-icon'>
                            <p className='article-page-main-right-container-content-topic-name'>Current Topic Name</p>
                            <ShareIcon Style='article-page-main-right-container-content-share-icon' fontSize='large' />
                        </div>
                        <div className='article-page-main-right-container-content-profile-details-social-icons'>
                            <div className='article-page-main-right-container-content-profile-details'>
                                <Avatar className={classes.author_profile_picture} src={''} alt={<AccountCircleIcon className={classes.AccountCircleIconStyle} />} />
                                <div className={classes.author_name_date}>
                                    <div className={classes.author_name}>Author Name</div>
                                    <div className={classes.date}>dd/dd/dddd</div>
                                </div>
                            </div>
                            <div className='article-page-main-right-container-content-social-icons'>
                                <LinkedInIcon className={classes.article_page_main_right_container_content_social_icon} />
                                <FacebookIcon className={classes.article_page_main_right_container_content_social_icon} />
                                <InstagramIcon className={classes.article_page_main_right_container_content_social_icon} />
                                <YouTubeIcon className={classes.article_page_main_right_container_content_social_icon} />
                            </div>
                        </div>
                        <Switch>
                            <Route exact path='/article-page' component={Description} />
                            <Route exact path='/article-page/related-videos' component={Related_Videos} />
                            <Route exact path='/article-page/discussion' component={Discussion} />
                        </Switch>
                    </div>
                </div>
        </div>
        </Router>
    )
}