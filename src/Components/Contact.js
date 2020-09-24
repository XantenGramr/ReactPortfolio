import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from './Styles/Styles';
import ContactDetails from './Informations/ContactDetails';

function Contact() {
    const classes = useStyles();
    const [gif, setGif] = useState([]);

    useEffect( () => {
        axios
            .get('https://api.giphy.com/v1/gifs/search?api_key=Y8iFHABYB5BXvM15Ligf8VMMd7mCyJ7f&q=nice+to+meet+you&limit=1')
            .then(
                res=> {
                    setGif(res.data.data[0].images.downsized.url);
                }).catch(err => {
                    console.log(err);
                }
            )
    })


    return (
        <>
        <div className={classes.contactBackground} id="contact">
            <Container className={classes.baseContainer}>
                <Paper className={classes.paper}>
                    <div className={classes.objects}>
                        <h1>Contact Me</h1>
                        <ContactDetails />
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper elevation={0} className={classes.transparentpaper}>
                                    <img className={classes.objects} src={gif} alt="myImage"/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Container>
        </div>
        </>
    );
}

export default Contact;
