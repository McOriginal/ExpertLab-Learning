import Access from "./Access";
import HowIsWork from "./HowIsWork";
import Sponsors from "./Sponsors";
import HomeHeader from "./Header";
import LastCours from "./LatstCours";


export default function HomePage(){


    return(
        <>
        <HomeHeader />
        <Sponsors />
        <HowIsWork />
        <Access />
        <LastCours />
        </>
    )
}