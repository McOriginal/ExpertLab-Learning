

import classes from './NewCoursForm.module.css';



export default function NewCoursForm(){

    return(
        <>
        
        <div className={classes.container}>
            <div className={classes.form_container}>
                <h1>Ajouter un cours</h1>

                <div className={classes.contact}>
                    <form action="http://localhost:5000/newcours" method='POST'>

                        <div className={classes.input_box}>
                            <input type="text" name="title" placeholder='Nom du cours'/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="detail" placeholder='Faite un petit détail du cours'/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="duree" placeholder="Nombre d'heure"/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="lessons" placeholder='Nombe de lessons'/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="imageUrl" placeholder='Image url'/>
                        </div>
                        <button type='submit'>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}