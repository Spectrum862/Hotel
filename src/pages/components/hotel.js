import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid,Button, Card, CardActionArea,CardActions,CardMedia,CardContent} from '@material-ui/core/'

export default class Hotel extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            name:'Untitle',
            location:'unknown',
            price: 0 
        }
    }
    
    render(){
        return(
            <Card>
                <CardActionArea>
                    <CardMedia
                    style={{height:300}}
                    image='https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
            </Card>
        )
    }
}