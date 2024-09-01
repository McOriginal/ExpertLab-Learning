import classes from './Sponsors.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import google from './../../images/google.png';
import W3Schools from './../../images/W3Schools.png';
import codeacademie from './../../images/codeacademie.png';
import coursera from './../../images/coursera.png';
import orange from './../../images/orange.png';
import openclassroom from './../../images/openclassroom.png';
import udemy from './../../images/udemy.png';




const listImage = [
  
  {name: udemy },
 { name: codeacademie },
 { name: openclassroom},
 { name: google },
{  name: orange },
 { name: coursera },
  {name: W3Schools },

]

export default function Sponsors(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000
      };


    return(
        <>
        <div className={classes.container}>

           <h1> Nos Partenaire</h1>

        <div className="slider-container">
      <Slider {...settings}>
           {listImage.map((item, index) => (
           <div className={classes.box_img} key={index }>
             <img src={item.name} alt="nos sponsort" />
           </div>
           ))}
        </Slider>
        </div>

        </div>
        </>
    )

    
}



