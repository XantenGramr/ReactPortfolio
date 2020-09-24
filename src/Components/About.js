import React from 'react';
import { Container, Paper } from '@material-ui/core';
import Work from './Informations/Work';
import Languages from './Informations/Languages';
import AboutMe from './Informations/AboutMe';
import { useStyles } from './Styles/Styles';

function About() {
    const classes = useStyles();

    return (
        <>
        <div className={classes.aboutBackground} id="about">
            <Container className={classes.baseContainer}>
                <Paper className={classes.paper}>
                    <div className={classes.objects}>
                        <div className={classes.details}>
                            <AboutMe />
                            <br/><br/>
                            <Work />
                            <br/><br/>
                            <Languages />
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
        </>
    );
}

export default About;
