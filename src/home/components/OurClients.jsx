
import classes from './OurClients.module.css';

import { FaQuoteRight } from "react-icons/fa";
import user from './../../images/user.jpg';

export default function OurClients(){

    return(
        <>
        <div className={classes.container}>
        <h1>Que disent nos clients</h1>
        <div className={classes.box}>
            <div className={classes.card}>
               <div className={classes.contente}>
               <div className={classes.box_img}>
                    <img src={user} alt="icon" />
                </div>
                <div className={classes.user_info}>
                <h4>Seydou Guindo</h4> 
                <p>Sotuba ACI, Bamako</p>
                </div>
            <FaQuoteRight className={classes.quatte} />
               </div>
               <p className={classes.comments}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis soluta impedit temporibus numquam dolore. Rerum optio, numquam soluta debitis possimus necessitatibus cupiditate voluptatibus vero quasi, voluptas neque sunt consectetur.
               </p>
            </div>


            <div className={classes.card}>
               <div className={classes.contente}>
               <div className={classes.box_img}>
                    <img src={user} alt="icon" />
                </div>
                <div className={classes.user_info}>
                <h4>Seydou Guindo</h4> 
                <p>Sotuba ACI, Bamako</p>
                </div>
            <FaQuoteRight className={classes.quatte} />
               </div>
               <p className={classes.comments}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis soluta impedit temporibus numquam dolore. Rerum optio, numquam soluta debitis possimus necessitatibus cupiditate voluptatibus vero quasi, voluptas neque sunt consectetur.
               </p>
            </div>


            <div className={classes.card}>
               <div className={classes.contente}>
               <div className={classes.box_img}>
                    <img src={user} alt="icon" />
                </div>
                <div className={classes.user_info}>
                <h4>Seydou Guindo</h4> 
                <p>Sotuba ACI, Bamako</p>
                </div>
            <FaQuoteRight className={classes.quatte} />
               </div>
               <p className={classes.comments}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis soluta impedit temporibus numquam dolore. Rerum optio, numquam soluta debitis possimus necessitatibus cupiditate voluptatibus vero quasi, voluptas neque sunt consectetur.
               </p>
            </div>


            <div className={classes.card}>
               <div className={classes.contente}>
               <div className={classes.box_img}>
                    <img src={user} alt="icon" />
                </div>
                <div className={classes.user_info}>
                <h4>Seydou Guindo</h4> 
                <p>Sotuba ACI, Bamako</p>
                </div>
            <FaQuoteRight className={classes.quatte} />
               </div>
               <p className={classes.comments}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis omnis soluta impedit temporibus numquam dolore. Rerum optio, numquam soluta debitis possimus necessitatibus cupiditate voluptatibus vero quasi, voluptas neque sunt consectetur.
               </p>
            </div>
        </div>
        </div>
        </>
    )
}



