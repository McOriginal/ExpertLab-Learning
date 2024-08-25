import { Outlet } from "react-router-dom";
import NavBarLinks from "./NavBarLinks";


function MainHeader(){

    return(
        <>
        <NavBarLinks />
        <Outlet />
        </>
    );
}

export default MainHeader;