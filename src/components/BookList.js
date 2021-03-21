import Grid from '@material-ui/core/Grid';
import BookItem from './BookItem';

const BookList = ({list}) => {
    return( 
        <Grid container style={{    display: 'flex',flexDirection: 'row', flexWrap: 'wrap'  }}>
            {
                list.length !== 0 && [
                    list.map((book, index) => (
                        <BookItem key={index} data={book}/>
                    ))
                ]
            }
        </Grid>
    )
}

export default BookList;