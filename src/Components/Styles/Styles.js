import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    pageDivider: {
        paddingTop: "2vh",
        backgroundColor: "#846E01"
    },
    appBar: {
        backgroundColor: "#846E01",
    },
    baseContainer: {
        paddingTop: "20vh",
        paddingBottom: "60vh",  
    },
    transparentpaper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "rgba(0,0,0,0)"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        background: "rgba(0,0,0,.6)"
    },
    objects: {
        opacity: 1,
        color: "#d5d5d5",
        fontFamily: "Lucida Console",
    },
    details: {
        textAlign: "left"
    },
    homeBackground: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/home-background.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    aboutBackground: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "/about-background.jpg"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    contactBackground: {
        backgroundImage: `url(${process.env.PUBLIC_URL + '/contact-background.jpg'})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
}));

export { useStyles };