
import classes from './AllCours.module.css';

export default function Cours({title, image, detail, duree, lessons}){

    return(
        <>
       <article>
       <div className={classes.card}>
            <div className={classes.box_img}>
                <img src={image} alt={title} />
                </div>
                <p className={classes.title}>{title}</p>
                <h4 className={classes.detail}>{detail} </h4>
                <p className={classes.lesson}>{duree}  .  {lessons} lessons</p>
                </div>
       </article>
        </>
    )
}