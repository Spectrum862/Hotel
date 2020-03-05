import React,{Fragment,Component} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid,Button, Card, CardActionArea,CardActions,CardMedia,CardContent,Icon} from '@material-ui/core/'

export default class Hotel extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.name,
            location:"unknown",
            price:this.props.price
        }
    }
    
    render(){
        return(
            <ThemeProvider theme={theme}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        style={{height:300}}
                        image='https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80'
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