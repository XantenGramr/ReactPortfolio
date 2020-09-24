import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles/Styles.js';

function Home() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.homeBackground}>
            <Container id="home" className={classes.baseContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper elevation={0} className={classes.transparentpaper}>
                            <img className={classes.objects} src="https://s3.zerochan.net/240/47/24/1456247.jpg" alt="myImage"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div className={classes.objects}>
                                <h1>Sigfreid Luigi C. Santos</h1>
                                <h1>Software Engineer</h1>
                                <h1>C++ | Java | Python | React</h1>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
        </>
    );
}

export default Home;
