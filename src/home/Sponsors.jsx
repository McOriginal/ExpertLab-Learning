import classes from './Sponsors.module.css';

import google from './../images/google.png';
import W3Schools from './../images/W3Schools.png';
import codeacademie from './../images/codeacademie.png';
import coursera from './../images/coursera.png';
import orange from './../images/orange.png';
import openclassroom from './../images/openclassroom.png';
import udemy from './../images/udemy.png';






export default function Sponsors(){

    return(
        <>
        <div className={classes.container}>

           
        <div className={classes.box_sponsors}>
            <div className={classes.img_box}><img src={udemy} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={codeacademie} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={openclassroom} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={google} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={orange} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={coursera} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={W3Schools} alt="logo sponsors" /></div>
        </div>
        </div>
        </>
    )
}