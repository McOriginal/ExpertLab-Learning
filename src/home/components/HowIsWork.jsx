import classes from './HowIsWork.module.css';

import { FaBookMedical } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiDesk } from "react-icons/gi";
import { PiCertificateFill } from "react-icons/pi";




export default function HowIsWork(){

    return(
        <>
        <div className={classes.container}>
            <h1>Comment ça fonctione</h1>

            <div className={classes.box_card}>
                <div className={classes.card}>
                    <div className={classes.box_icon}>

                <FaBookMedical className={classes.icon}  />
                    </div>
                    <h4>Prends un abonnement</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className={classes.card}>
                    <div className={classes.box_icon}>

                <FaSearch  className={classes.icon}/>
                    </div>
                    <h4>Trouver un cours</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className={classes.card}>
                    <div className={classes.box_icon}>

                    <GiDesk className={classes.icon} />
                    </div>
                    <h4>Terminer le cours</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className={classes.card}>
                    <div className={classes.box_icon}>

                <PiCertificateFill className={classes.icon} />
                    </div>
                    <h4>Recevez un certificat</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        </>
    )
}