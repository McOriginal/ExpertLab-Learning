import Access from "./Access";
import HowIsWork from "./HowIsWork";
import Sponsors from "./Sponsors";
import HomeHeader from "./header/Header";


export default function Home(){


    return(
        <>
        <HomeHeader />
        <Sponsors />
        <HowIsWork />
        <Access />
        </>
    )
}