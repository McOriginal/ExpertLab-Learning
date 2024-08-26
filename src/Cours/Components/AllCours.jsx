
import classes from './AllCours.module.css';
import web1 from './../../images/web1.jpg';
import web2 from './../../images/web2.jpg';
import web3 from './../../images/web3.jpg';
import web4 from './../../images/web4.jpg';
import web5 from './../../images/web5.jpg';
import web6 from './../../images/web6.jpg';





export default function AllCours(){

    return(
        <>
        <section className={classes.header_text}>
            <h1>Tous nos cours</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div className={classes.inputbox}>
            <form action="">
                <input type="search" name='recherche' placeholder='Chercher un cours...' />
            </form>
                    </div>
            <div className={classes.categorie_btn}>
                <button> toute les catégories</button>
                <button> Développement web</button>
                <button> Développement mobile</button>
                <button> Data analyse</button>
                <button> marketing digital</button>
                <button> UI/UX</button>
                <button> Graphisme</button>
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
        </section>
        </>
    )
}