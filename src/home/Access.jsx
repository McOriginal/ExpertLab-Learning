
import classes from './Access.module.css';
import accessImage  from'./../images/ilustration2.png';
import { ImCheckboxChecked } from "react-icons/im";



export default function Access(){


    return(
        <>
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.box_img}>
                    <img src={accessImage} alt="access" />
                </div>
                <div className={classes.contente}>
                    <h2>Trouvez n'import quoi pour n'import qui</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sequi ut minus velit et sit cupiditate enim laborum nam porro.</p>
                    
                    <div className={classes.liste}>
                    <ul>
                        <li><ImCheckboxChecked className={classes.checked} />  <p>Lorem, ipsum dolor.</p> </li>
                        <li><ImCheckboxChecked className={classes.checked} />  <p>Lorem, ipsum dolor.</p> </li>
                    </ul>
                    <ul>
                        <li><ImCheckboxChecked className={classes.checked} />  <p>Lorem, ipsum dolor.</p> </li>
                        <li><ImCheckboxChecked className={classes.checked} />  <p>Lorem, ipsum dolor.</p> </li>
                    </ul>
                    </div>

                    <button>Commencer</button>
                </div>
            </div>
        </div>
        </>
    )
}