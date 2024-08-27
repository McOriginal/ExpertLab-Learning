

import classes from './NewCoursForm.module.css';



export default function NewCoursForm(){

    return(
        <>
        
        <div className={classes.container}>
            <div className={classes.form_container}>
                <h1>Ajouter un cours</h1>

                <div className={classes.contact}>
                    <form action="">
                        <div className={classes.input_box}>
                            <select>
                                <option className={classes.item}>Sélectionner une catégorie</option>
                                <option className={classes.item} value=""> Développement web</option>
                                <option className={classes.item} value=""> Graphisme</option>
                                <option className={classes.item} value=""> Développement Mobile</option>
                                <option className={classes.item} value=""> Marketing digital</option>
                                <option className={classes.item} value=""> Data analyse</option>
                                <option className={classes.item} value=""> UI/X</option>
                            </select>
                        </div>

                        <div className={classes.input_box}>
                            <input type="text" name="courName" placeholder='Nom du cours'/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="heure" placeholder="Nombre d'heure"/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="lessons" placeholder='Nombe de lessons'/>
                        </div>
                        <div className={classes.input_box}>
                            <input type="text" name="image" placeholder='Image url'/>
                        </div>
                        <button>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
        
        </>
    )
}