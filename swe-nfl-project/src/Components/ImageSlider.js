import { SliderData } from "./SliderData";
import { useState } from "react";
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from 'react-icons/fa';
import '../App.css';
import D_Fumbles from './WebScraper/team_Stats/D_Fumbles.json';
import D_Int from './WebScraper/team_Stats/D_Int.json';
import D_Passing from './WebScraper/team_Stats/D_Passing.json';
import D_Rushing from './WebScraper/team_Stats/D_Rushing.json';
import D_Scoring from './WebScraper/team_Stats/D_Scoring.json';
import O_Downs from './WebScraper/team_Stats/O_Downs.json';
import O_Passing from './WebScraper/team_Stats/O_Passing.json';
import O_Rushing from './WebScraper/team_Stats/O_Rushing.json';
import O_Scoring from './WebScraper/team_Stats/O_Scoring.json';
import O_Receiving from './WebScraper/team_Stats/O_Receiving.json';


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

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
            
            <div class='text'>Stats:</div>
            <table class="statsTable">
            
            <th>Offense:</th>
            <tr>
                <td class="statsCategory">Pass Yards</td>
                <td class="statsCategory">{O_Passing[current].stats.PassYds}</td>
            </tr>
            <tr>
                <td class="statsCategory">Rush Yards</td>
                <td class="statsCategory">{O_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory">Pass TD</td>
                <td class="statsCategory">{O_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory">Rush TD</td>
                <td class="statsCategory">{O_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory">Pass Completion %</td>
                <td class="statsCategory">{O_Passing[current].stats["Cmp%"]}</td>
            </tr>
            <tr>
                <td class="statsCategory">INT Thrown</td>
                <td class="statsCategory">{O_Passing[current].stats.INT}</td>
            </tr> 

            <th>Defense:</th>
            <tr>
                <td class="statsCategory">Pass Yards Against</td>
                <td class="statsCategory">{D_Passing[current].stats.Yds}</td>
            </tr>
            <tr>
                <td class="statsCategory">Rush Yards Against</td>
                <td class="statsCategory">{D_Rushing[current].stats.RushYds}</td>
            </tr>
            <tr>
                <td class="statsCategory">Pass TD Allowed</td>
                <td class="statsCategory">{D_Passing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory">Rush TD Allowed</td>
                <td class="statsCategory">{D_Rushing[current].stats.TD}</td>
            </tr>
            <tr>
                <td class="statsCategory">Defensive Int</td>
                <td class="statsCategory">{D_Passing[current].stats.INT}</td>
            </tr>
            <tr>
                <td class="statsCategory">Fumbles Caused</td>
                <td class="statsCategory">{D_Fumbles[current].stats.FF}</td>
            </tr> 
            </table>
        </section>
        
        
    );
};

export default ImageSlider;