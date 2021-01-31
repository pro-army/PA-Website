import React from 'react'
import '../css/nav-bar.css'
import logo from './ProgrammersArmyLogo.svg'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SearchBar from "material-ui-search-bar";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
</style>


const useStyles = makeStyles((theme) => ({
    'avatar-style' : {
        color: 'green',
        backgroundColor: '#05386B',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
      },
      searchbarStyle: {
        marginLeft: '34vw',
        borderRadius: '15px',
        width: '15vw',
        boxShadow: 'inset 0 0 8px -4px rgba(0,0,0,.5)',
    },
      'nav-bar-fields' : {
        color: '#05386B',
        fontFamily: 'Montserrat',
        fontSize: '2vw',
        fontWeight: '700',
        transition: 'all 1.5s',
      },
      formControl: {
        margin: theme.spacing(1),
        width: '120vw',
      },
      'nav-bar-dropdown': {
          display: 'flex',
          marginLeft:'1vw',
        //   marginRight: '0vw',
          marginTop: '-1vh',
      },
  }));

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        console.log('working');
    };

      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
    return (
        <div className='nav-bar'>   
            <img className='nav-bar-ProgrammersArmyLogo' src={logo} srcset='' alt='Programmers Army'></img>
            <SearchBar className={classes.searchbarStyle} />
            <span className='nav-bar-fields'>
                <Link to='/' Style='text-decoration:none;'>
                    Home
                </Link>
            </span>
            

            <FormControl className={classes['nav-bar-dropdown']} Style='width:12vw;'>
                <InputLabel id="demo-controlled-open-select-label" className={classes['nav-bar-fields']}>Domains</InputLabel>
                <Select className={classes['nav-bar-fields']} onChange={handleChange}>
                    <MenuItem className={classes['nav-bar-fields']} value="Programming">Programming</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes['nav-bar-dropdown']} Style='width:8vw;'>
                <InputLabel id="demo-controlled-open-select-label" className={classes['nav-bar-fields']}>More</InputLabel>
                <Select className={classes['nav-bar-fields']}>
                    <MenuItem className={classes['nav-bar-fields']} value="Language">Language</MenuItem>
                </Select>
            </FormControl>
            <span className='nav-bar-fields'>
                <Link to='/login' Style='text-decoration:none;'>
                    Login
                </Link>
            </span>
            <span className='nav-bar-profile'>
                <Avatar className={classes['avatar-style']} />
            </span>
        </div>
    )
}