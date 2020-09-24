import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

function ContactDetails() {
    return (
        <>
        <List>
            <ListItem>
                <ListItemAvatar>
                    <LinkedInIcon/>
                </ListItemAvatar>
                <ListItemText primary="linkedin.com/in/sigfreid-luigi-santos-16707511b/" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <PhoneIcon/>
                </ListItemAvatar>
                <ListItemText primary="+63 999 820 8681" />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <EmailIcon/>
                </ListItemAvatar>
                <ListItemText primary="sigfreidsantos@gmail.com" />
            </ListItem>
        </List>
        </>
    );
}

export default ContactDetails;
