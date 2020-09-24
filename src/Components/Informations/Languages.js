import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Divider } from '@material-ui/core';

function Languages() {
    return (
        <>
        <h1>Languages</h1>
        <Divider/>
        <p>Filipino</p>
        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/>
        <p>English</p>
        <StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarBorderIcon/>
        <p>Japanese</p>
        <StarIcon/><StarIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/>
        </>
    );
}

export default Languages;
