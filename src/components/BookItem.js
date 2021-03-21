import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const BookItem = (data) => {

    return(
        <Grid item xs>
            <Card style={{    width: '150px',textAlign: "center",padding: '1em 0 0 0',margin: '1em', alignSelf: 'center'}}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        <Link underline="none" target="_blank" href={data.data.link}>
                            {data.data.name}
                        </Link>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
};

export default BookItem;