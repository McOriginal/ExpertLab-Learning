import classes from './Header.module.css'
import { FaCirclePlay } from "react-icons/fa6";
import { ImCheckboxChecked } from "react-icons/im";

export default function HomeHeader(){

    return(
        <>
        <section className={classes.header}>
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