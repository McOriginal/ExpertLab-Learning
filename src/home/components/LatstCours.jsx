import classes from './LatsCous.module.css';
import web1 from './../../images/web1.jpg';
import web2 from './../../images/web2.jpg';
import web3 from './../../images/web3.jpg';
import web4 from './../../images/web4.jpg';
import web5 from './../../images/web5.jpg';
import web6 from './../../images/web6.jpg';


export default function LastCours(){

    return(
        <>
        
        <div className={classes.container}>
            <h2>Nos dérniers cours</h2>
            <div className={classes.contente}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam deleniti libero cumque molestiae dolorum dicta. Consequuntur, doloremque pariatur nisi fugiat assumenda eligendi, minus amet quo, quibusdam eum voluptate ad repellendus.</p>

                <button>Voir tous</button>
            </div>

            <div className={classes.box_card}>
                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web1} alt="lats cours" />
                    </div>
                    <p className={classes.title}>Développement web</p>
                    <h4 className={classes.detail}>Apprendre HTML-CSS débutant et avancé </h4>
                    <p className={classes.lesson}>9h 30min  .  16 lessons</p>
                </div>


                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web2} alt="lats cours" />
                    </div>
                    <p className={classes.title}>Développement web</p>
                    <h4 className={classes.detail}>Apprendre JavaScript débutant et avancé </h4>
                    <p className={classes.lesson}>15h  .  23 lessons</p>
                </div>



                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web4} alt="lats cours" />
                    </div>
                    <p className={classes.title}>UI/UX</p>
                    <h4 className={classes.detail}>Apprendre la conception des interfaces utilisateur débutant et avancé </h4>
                    <p className={classes.lesson}>13h 30min  .  20 lessons</p>
                </div>


                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web3} alt="lats cours" />
                    </div>
                    <p className={classes.title}>Marketing Digital</p>
                    <h4 className={classes.detail}>Apprendre la marketing digital débutant et avancé </h4>
                    <p className={classes.lesson}>25h 10min  .  30 lessons</p>
                </div>


                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web5} alt="lats cours" />
                    </div>
                    <p className={classes.title}>Data Science</p>
                    <h4 className={classes.detail}>Apprendre en Data Science débutant et avancé </h4>
                    <p className={classes.lesson}>16h 37min  .  22 lessons</p>
                </div>

                <div className={classes.card}>
                    <div className={classes.box_img}>
                        <img src={web6} alt="lats cours" />
                    </div>
                    <p className={classes.title}>Sécurité informatique</p>
                    <h4 className={classes.detail}>Apprendre la Sécurité informatique débutant et avancé </h4>
                    <p className={classes.lesson}>55h .  46 lessons</p>
                </div>
            </div>
        </div>
        
        </>
    )
}