import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import { fetch } from './features/books/booksSlice'
import BookList from './components/BookList';

import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './App.css';
import useStyles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const books = useSelector(state => state.books);
  const classes = useStyles();
  const dispatch = useDispatch();

  const filteredBooks = books.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm))  

  const onSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value.trim().toLocaleLowerCase());
  };

  const handleClickOpen = () => {
    setDialogIsOpen(true);
  };

  const handleClose = () => {
    setDialogIsOpen(false);
  };


  useEffect(() => {
    const getCourseLinks = async () => {
      let response  = await axios.get('https://sandbox.ahmcho.com/books');
      dispatch(fetch(response.data));
    }
    getCourseLinks();
  },[])
  
  return(
    <Container>
      <div className={classes.root}>
      <Dialog
        open={dialogIsOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Info"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This list of books is constantly being updated. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
        <AppBar position="fixed">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Free Books 
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={onSearch}
              />
            </div>
            <div className={classes.grow} />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleClickOpen}
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      { 
        books.length !== 0 ? (
          <BookList list={filteredBooks} />
        ) : (
          <CircularProgress style={{ display:"flex",margin:'0 auto'}}/>
        )
      }
    </Container>
  )
}

export default App;
