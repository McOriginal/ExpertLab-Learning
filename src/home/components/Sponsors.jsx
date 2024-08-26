import classes from './Sponsors.module.css';

import google from './../components/../../images/google.png'
import W3Schools from './../components/../../images/W3Schools.png';
import codeacademie from './../components/../../images/codeacademie.png';
import coursera from './../components/../../images/coursera.png';
import orange from './../components/../../images/orange.png';
import openclassroom from './../components/../../images/openclassroom.png';
import udemy from './../components/../../images/udemy.png';






export default function Sponsors(){

    return(
        <>
        <div className={classes.container}>

           <h1> Nos Partenaire</h1>
        <div className={classes.box_sponsors}>
            {/* <div className={classes.img_box}><img src={udemy} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={codeacademie} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={openclassroom} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={google} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={orange} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={coursera} alt="logo sponsors" /></div>
            <div className={classes.img_box}><img src={W3Schools} alt="logo sponsors" /></div> */}
           
            <img src={udemy} alt="logo sponsors" />
            <img src={codeacademie} alt="logo sponsors" />
            <img src={openclassroom} alt="logo sponsors" />
            <img src={google} alt="logo sponsors" />
            <img src={orange} alt="logo sponsors" />
            <img src={coursera} alt="logo sponsors" />
            <img src={W3Schools} alt="logo sponsors" />
        </div>
        </div>
        </>
    )
}