import React,{Fragment,Component,useState} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid, Paper, TextField, Button} from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,} from '@material-ui/pickers'
import { useHistory } from 'react-router-dom'

export default function Booking(props){
    let history = useHistory()
 
    const [selectedDatein,setSelectedDatein] = useState(new Date(Date.now()));
    const [selectedDateout,setSelectedDateout] = useState(new Date(Date.now()));

    const handleDateChangein = date => {
        setSelectedDatein(date);
    };

    const handleDateChangeout = date => {
        setSelectedDateout(date);
    };

    const onSubmit=e=>{
        e.preventDefault()
        history.replace('/hotel')
    }
    return(
        <Fragment>
            <ThemeProvider theme={theme}>
            <Typography variant="h4" align="center" >ค้นหาโรงแรม</Typography>
            <form onSubmit={onSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField name='username' label="สถานที่" fullWidth variant="outlined" margin="normal" required/>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12} md={6}>
                        <KeyboardDatePicker
                        inputVariant='outlined'
                        fullWidth
                        required
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="เช็คอิน"
                        value={selectedDatein}
                        onChange={handleDateChangein}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <KeyboardDatePicker
                        inputVariant='outlined'
                        fullWidth
                        required
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="เช็คเอาท์"
                        value={selectedDateout}
                        onChange={handleDateChangeout}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
            </Grid>
            <Button type='submit'fullWidth color='primary' variant='contained' className='margintop3'>ค้นหา</Button>
            </form>
            </ThemeProvider>
        </Fragment>
    )
}