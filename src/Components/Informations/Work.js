import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        color: theme.palette.text.secondary,
    },
    date: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function Work() {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
        <h1>Work Experience</h1>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content">
                <Typography className={classes.heading}>Trend Micro</Typography>
                <Typography className={classes.secondaryHeading}>Cloud Software Engineer</Typography>
                <Typography className={classes.date}>August 2020 - Present</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
                <Typography className={classes.heading}>Nokia Technology Center, Inc.</Typography>
                <Typography className={classes.secondaryHeading}>Technical Lead</Typography>
                <Typography className={classes.date}>January 2017 - June 2020</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
                <Typography className={classes.heading}>Aeon Credit Service Systems</Typography>
                <Typography className={classes.secondaryHeading}>Software Engineer</Typography>
                <Typography className={classes.date}>January 2015 - October 2016</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
            </AccordionDetails>
        </Accordion>
        </>
    );
}

export default Work;
