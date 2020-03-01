import React,{Fragment,Component,useState} from 'react'
import theme from '../../theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { Container, Typography , Grid, Paper, TextField} from '@material-ui/core/'
import DateFnsUtils from '@date-io/date-fns'
import {MuiPickersUtilsProvider,KeyboardTimePicker,KeyboardDatePicker,} from '@material-ui/pickers'

export default function Booking(){
    const [selectedDatein,setSelectedDatein] = useState(new Date(Date.now()));
    const [selectedDateout,setSelectedDateout] = useState(new Date(Date.now()));

    const handleDateChangein = date => {
        setSelectedDatein(date);
    };

    const handleDateChangeout = date => {
        setSelectedDateout(date);
    };

    return(
        <Fragment>
            <ThemeProvider theme={theme}>
            <Typography variant="h4" align="center" className>ค้นหาโรงแรม</Typography>
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
            </ThemeProvider>
        </Fragment>
    )
}