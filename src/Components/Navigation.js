import React from 'react';
import { Tabs, Tab, AppBar, Container} from '@material-ui/core';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import {useStyles} from './Styles/Styles.js'

function Navigation() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const updateTabStatus = (page, isVisible) => {
        if (selectedTab === 0 && page === "a" && isVisible) {
            setSelectedTab(1);
        } else if (selectedTab === 1 && page === "c" && isVisible) {
            setSelectedTab(2);
        } else if (selectedTab === 2 && page === "c" && !isVisible){
            setSelectedTab(1);
        } else if (selectedTab === 1 && page === "a" && !isVisible) {
            setSelectedTab(0);
        }
    }

    const updateHomeVisibility = (isVisible) => {
        updateTabStatus("h", isVisible);
    };
    const updateAboutVisibility = (isVisible) => {
        updateTabStatus("a", isVisible);
    };
    const updateContactVisibility = (isVisible) => {
        updateTabStatus("c", isVisible);
    };

    return (
        <>
            <div>
                <Container >
                    <AppBar className={classes.appBar} position="fixed">
                        <Tabs value={selectedTab} onChange={handleChange} centered>
                            <Link activeClass="active" to="home"  spy={true} smooth={true} duration={500} >
                               <Tab label="Home" />
                            </Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                <Tab label="About" />
                            </Link>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={500}>
                                <Tab label="Contact"/>
                            </Link>
                        </Tabs>
                    </AppBar>
                </Container>
                <VisibilitySensor partialVisibility onChange={updateHomeVisibility}>
                    <Home />
                </VisibilitySensor>
                <div className={classes.pageDivider}>
                </div>
                <VisibilitySensor partialVisibility onChange={updateAboutVisibility}>
                    <About />
                </VisibilitySensor>
                <div className={classes.pageDivider}>
                </div>
                <VisibilitySensor partialVisibility onChange={updateContactVisibility}>
                    <Contact />
                </VisibilitySensor>
            </div>
        </>
    );
}

export default Navigation;
