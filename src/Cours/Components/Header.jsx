
import classes from './Header.module.css';

import headerImg from './../../images/headerImg.png';
import { FaCirclePlay } from "react-icons/fa6";


export default function Header(){


    return(
        <>


<section className={classes.header}>

<img src={headerImg} alt="learning logo" className={classes.learningLogo} />

<div className={classes.header_box}>
    <h1>Lisez quant tu veux où tu veux</h1>
    <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, unde. Rem eos iusto quos nam dignissimos iste quaerat cum. Magnam.

    </p>
    <div className={classes.header_box_btn}>
        <button className={classes.header_box_btn1}>Commencer</button>
        <FaCirclePlay className={classes.header_box_btn_play} />
    </div>
    
</div>

</section>
        
       
        </>
    )
}