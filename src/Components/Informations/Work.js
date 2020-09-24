import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        fontFamily: "Lucida Console",
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        color: theme.palette.text.secondary,
        fontFamily: "Lucida Console",
    },
    date: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        fontFamily: "Lucida Console",
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
                <p>
                    <Typography>
                        Created this react project.
                    </Typography>
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
                <Typography className={classes.heading}>Nokia Technology Center, Inc.</Typography>
                <Typography className={classes.secondaryHeading}>Technical Lead</Typography>
                <Typography className={classes.date}>January 2017 - June 2020</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                    <Typography>
                        5G Radio Link Control Expert and Design/Code Reviewer.
                    </Typography>
                    <Typography>
                        Designed and implemented software architecture for high throughput requirements of 5G 3GPP.
                    </Typography>
                </p>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content">
                <Typography className={classes.heading}>Aeon Credit Service Systems</Typography>
                <Typography className={classes.secondaryHeading}>Software Engineer</Typography>
                <Typography className={classes.date}>January 2015 - October 2016</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <p>
                    <Typography>
                        Developed User Interface (java) for Cambodia Branch. Prepared and developed test scenarios for given features.
                    </Typography>
                </p>
            </AccordionDetails>
        </Accordion>
        </>
    );
}

export default Work;
