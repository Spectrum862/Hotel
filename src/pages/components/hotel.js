import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid,Button, Card, CardActionArea,CardActions,CardMedia,CardContent,Icon} from '@material-ui/core/'

export default class Hotel extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.name,
            location:this.props.location,
            price:this.props.price,
            image:this.props.image,
            id:this.props.id
        }
    }
    
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Card>
                    <CardActionArea href={`/movieinfo/${this.state.id}`}>
                        <CardMedia
                        style={{height:300}}
                        image={this.state.image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Grid container >
                            <Grid item xs>
                                <Typography variant="h5">{this.state.name}</Typography>
                            </Grid>
                            <Grid item >
                                <Typography variant="h6">${this.state.price}</Typography>
                            </Grid>
                        </Grid>                      
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Icon color="primary" fontSize="small">place</Icon>
                            {this.state.location}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ThemeProvider>
        )
    }
}