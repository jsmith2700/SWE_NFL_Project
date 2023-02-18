import { SliderData } from "./SliderData";
import { useState } from "react";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleUp className='up-arrow' onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div classname={index === current ? 'slide active' : 'slide'} key= 
                    {index}>
                        {index - 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageTop"/>

                        )}
                        {index === current && (
                            <img src={slide.image} alt="NFL Team" className="image"/>
                        )}
                        {index + 1 === current && (
                            <img src={slide.image} alt="NFL Team" className="imageBottom"/>    
                        )}

                        
                    </div>
                );

                    
                

                
            })}
            <FaArrowAltCircleDown className='down-arrow' onClick={nextSlide}/>
        </section>
        
        
    );
};

export default ImageSlider;