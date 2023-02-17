
import './App.css';
import Sidebar from './Components/Sidebar';
import image from '../src/NFL Project Background.png'
import { SliderData } from './Components/SliderData';
import ImageSlider from './Components/ImageSlider';

function App() {
  return (  
    <div>
  
      <div class="bg">
      
      <div class='teamsText'>
        Select two teams! 
      </div>
      <div class="centerBox">
        
        <div class="teamSelect">
          <ImageSlider slides={SliderData}/>

        </div>
        <div class="teamSelectRight">
          <ImageSlider slides={SliderData}/>
        </div>
      </div>
    </div>
    </div>

  );
}

export default App;
