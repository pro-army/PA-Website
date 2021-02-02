import React,{ useState, useContext,useEffect } from 'react'
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
import Autocomplete from '@material-ui/lab/Autocomplete';
import {ArticlesContext} from '../../App'
import TextField from '@material-ui/core/TextField';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
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
  const articles = useContext(ArticlesContext);
  // articles = articles.map((val => console.log(val.title)));

    const handleChange = (event) => {
        console.log('working');
    };

      const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };
      const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
      }
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
      }
      // function dosomething()
      // {
      //   alert('erwerwrw');
      //   // console.log(articles);
      // }
      const handleOnFocus = () => {
        console.log('Focused');
      }
      const [value, setValue] = React.useState(null);
      // const top100Films = [
      //   { title: 'The Shawshank Redemption', year: 1994 },
      //   { title: 'The Godfather', year: 1972 },
      //   { title: 'The Godfather: Part II', year: 1974 },
      //   { title: 'The Dark Knight', year: 2008 },
      //   { title: '12 Angry Men', year: 1957 },
      //   { title: "Schindler's List", year: 1993 },
      //   { title: 'Pulp Fiction', year: 1994 },
      //   { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
      //   { title: 'The Good, the Bad and the Ugly', year: 1966 },
      //   { title: 'Fight Club', year: 1999 },
      //   { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
      //   { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
      //   { title: 'Forrest Gump', year: 1994 },
      //   { title: 'Inception', year: 2010 },
      //   { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
      //   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
      //   { title: 'Goodfellas', year: 1990 },
      //   { title: 'The Matrix', year: 1999 },
      //   { title: 'Seven Samurai', year: 1954 },
      //   { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
      //   { title: 'City of God', year: 2002 },
      //   { title: 'Se7en', year: 1995 },
      //   { title: 'The Silence of the Lambs', year: 1991 },
      //   { title: "It's a Wonderful Life", year: 1946 },
      //   { title: 'Life Is Beautiful', year: 1997 },
      //   { title: 'The Usual Suspects', year: 1995 },
      //   { title: 'Léon: The Professional', year: 1994 },
      //   { title: 'Spirited Away', year: 2001 },
      //   { title: 'Saving Private Ryan', year: 1998 },
      //   { title: 'Once Upon a Time in the West', year: 1968 },
      //   { title: 'American History X', year: 1998 },
      //   { title: 'Interstellar', year: 2014 },
      //   { title: 'Casablanca', year: 1942 },
      //   { title: 'City Lights', year: 1931 },
      //   { title: 'Psycho', year: 1960 },
      //   { title: 'The Green Mile', year: 1999 },
      //   { title: 'The Intouchables', year: 2011 },
      //   { title: 'Modern Times', year: 1936 },
      //   { title: 'Raiders of the Lost Ark', year: 1981 },
      //   { title: 'Rear Window', year: 1954 },
      //   { title: 'The Pianist', year: 2002 },
      //   { title: 'The Departed', year: 2006 },
      //   { title: 'Terminator 2: Judgment Day', year: 1991 },
      //   { title: 'Back to the Future', year: 1985 },
      //   { title: 'Whiplash', year: 2014 },
      //   { title: 'Gladiator', year: 2000 },
      //   { title: 'Memento', year: 2000 },
      //   { title: 'The Prestige', year: 2006 },
      //   { title: 'The Lion King', year: 1994 },
      //   { title: 'Apocalypse Now', year: 1979 },
      //   { title: 'Alien', year: 1979 },
      //   { title: 'Sunset Boulevard', year: 1950 },
      //   { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
      //   { title: 'The Great Dictator', year: 1940 },
      //   { title: 'Cinema Paradiso', year: 1988 },
      //   { title: 'The Lives of Others', year: 2006 },
      //   { title: 'Grave of the Fireflies', year: 1988 },
      //   { title: 'Paths of Glory', year: 1957 },
      //   { title: 'Django Unchained', year: 2012 },
      //   { title: 'The Shining', year: 1980 },
      //   { title: 'WALL·E', year: 2008 },
      //   { title: 'American Beauty', year: 1999 },
      //   { title: 'The Dark Knight Rises', year: 2012 },
      //   { title: 'Princess Mononoke', year: 1997 },
      //   { title: 'Aliens', year: 1986 },
      //   { title: 'Oldboy', year: 2003 },
      //   { title: 'Once Upon a Time in America', year: 1984 },
      //   { title: 'Witness for the Prosecution', year: 1957 },
      //   { title: 'Das Boot', year: 1981 },
      //   { title: 'Citizen Kane', year: 1941 },
      //   { title: 'North by Northwest', year: 1959 },
      //   { title: 'Vertigo', year: 1958 },
      //   { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
      //   { title: 'Reservoir Dogs', year: 1992 },
      //   { title: 'Braveheart', year: 1995 },
      //   { title: 'M', year: 1931 },
      //   { title: 'Requiem for a Dream', year: 2000 },
      //   { title: 'Amélie', year: 2001 },
      //   { title: 'A Clockwork Orange', year: 1971 },
      //   { title: 'Like Stars on Earth', year: 2007 },
      //   { title: 'Taxi Driver', year: 1976 },
      //   { title: 'Lawrence of Arabia', year: 1962 },
      //   { title: 'Double Indemnity', year: 1944 },
      //   { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
      //   { title: 'Amadeus', year: 1984 },
      //   { title: 'To Kill a Mockingbird', year: 1962 },
      //   { title: 'Toy Story 3', year: 2010 },
      //   { title: 'Logan', year: 2017 },
      //   { title: 'Full Metal Jacket', year: 1987 },
      //   { title: 'Dangal', year: 2016 },
      //   { title: 'The Sting', year: 1973 },
      //   { title: '2001: A Space Odyssey', year: 1968 },
      //   { title: "Singin' in the Rain", year: 1952 },
      //   { title: 'Toy Story', year: 1995 },
      //   { title: 'Bicycle Thieves', year: 1948 },
      //   { title: 'The Kid', year: 1921 },
      //   { title: 'Inglourious Basterds', year: 2009 },
      //   { title: 'Snatch', year: 2000 },
      //   { title: '3 Idiots', year: 2009 },
      //   { title: 'Monty Python and the Holy Grail', year: 1975 },
      // ];
      const defaultProps = {
        options: articles,
        getOptionLabel: (option) => option.ratings.title,
      };
      // const defaultProps = {
      //   options: top100Films,
      //   getOptionLabel: (option) => option.title,
      // };
    return (
        <div className='nav-bar'>   
            <img className='nav-bar-ProgrammersArmyLogo' src={logo} srcset='' alt='Programmers Army'></img>
            <SearchBar className={classes.searchbarStyle} />
            {/* <ReactSearchAutocomplete
            resultStringKeyName="title"
            items={articles}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            styling={'width:15vw;'}
            autoFocus
          /> */}
          {/* <Autocomplete
            {...defaultProps}
            id="autoComplete"
            autoComplete
            includeInputInList
            className={classes.searchbarStyle}
            renderInput={(params) => <TextField {...params} label="autoComplete" margin="normal" />}
          /> */}
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