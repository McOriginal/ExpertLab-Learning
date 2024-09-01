
import classes from './AllCours.module.css';

import { useEffect, useState } from 'react';
import Cours from './Cours';





export default function AllCours(){

const [cours, setCours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fonction pour récupérer les cours
        const fetchCours = async () => {
            try {
                const response = await fetch('http://localhost:5000/cours');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCours(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchCours();
    }, []);

    if (loading) {
        return <p className={classes.loading}>Loading...</p>;
    }

    if (error) {
        return <p className={classes.error}>Error: {error}</p>;
    }

    


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


            {/* {cours.length === 0 && <p> Aucun cour disponible pour le moment</p> }  */}
            
            {cours.length >0 ? 
            cours.map((c) => (
                <Cours key={c.title} 
                title={c.title}
                detail={c.detail}
                duree={c.duree}
                lessons={c.lessons}
                image={c.imageUrl}
                 />
             ))  : <p className={classes.aucun_cour}> Aucun cour disponible pour le moment</p>
             } 
             
                
                  {/* <ul>
                {cours.map((coursItem) => (
                    <li key={cours._id}>
                        {coursItem.title}
                        {coursItem.detail}
                        {coursItem.duree}
                        {coursItem.lessons}
                        {coursItem.imageUrl}
                        {coursItem.addDate}
                        </li> 
                ))}
            </ul>  */}

                
            </div>
            
        </section>
        </>
    )
}