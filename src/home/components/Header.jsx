import classes from './Header.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";
import learnLogo from './../../images/img_small.png';




export default function HomeHeader(){

    return(
        <>
        <section className={classes.header}>

            <img src={learnLogo} alt="learning logo" className={classes.learningLogo} />

            <div className={classes.header_box}>
                <h1>Expert-Lab OneLine Learning</h1>
                <p className={classes.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, unde. Rem eos iusto quos nam dignissimos iste quaerat cum. Magnam.

                </p>
                <div className={classes.header_box_btn}>
                    <button className={classes.header_box_btn1}>Commencer</button>
                    <FaCirclePlay className={classes.header_box_btn_play} />
                </div>
                <div className={classes.header_contente}>
                    <p><ImCheckboxChecked className={classes.checked} /> Lorem, ipsum dolor.</p>
                    <p><ImCheckboxChecked  className={classes.checked}/> Lorem, ipsum dolor.</p>
                    <p><ImCheckboxChecked className={classes.checked} /> Lorem, ipsum dolor.</p>

                </div>
            </div>
            
        </section>
        </>
    )
}