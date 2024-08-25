import classes from './NavBar.module.css';
import logo from './../images/Logo.png';
import { GrFormNextLink } from "react-icons/gr";
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



export default function NavBarLinks(){
    const [changeMenu, setChangeMenu] = useState(false);

    const activeMenu = () =>{
        setChangeMenu(true);
    }

    function closeMenu(){
        setChangeMenu(false);
    }

    return(
        <>
       <div className={classes.navBar_items}>
       <nav className={classes.navBar}>
            <img src={logo} alt="logo" />
            <ul className={`${changeMenu ? classes.menu_active : undefined}`}>
            <IoMdCloseCircle className={classes.close}  onClick={closeMenu}/>
                <li><NavLink href="/"> Accueil</NavLink></li>
                <li><NavLink href="/"> Cours</NavLink></li>
                <li><NavLink href="/"> Formateurs</NavLink></li>
                <li><NavLink href="/"> Contacts</NavLink></li>
                <IoMdLogIn className={classes.login} />
            </ul>

            <button className={classes.btn_login}>Connexion <GrFormNextLink className={classes.arrow} /></button>

        </nav>
        <TiThMenu className={classes.menu} onClick={activeMenu} />
       </div>
        </>
    )
}