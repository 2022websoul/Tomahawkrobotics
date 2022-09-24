import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SecondSlide from './components/main/SecondSlide';
import FirstSlide from './components/main/FirstSlide';
import ThirdSlide from './components/main/ThirdSlide';
import FifthSlide from './components/main/FifthSlide';
import BootstrapCarousel from './components/main/BootstrapCarousel';
import NewSlider from './components/main/NewSlider';
import Footer from './components/footer/Footer';
import Gridcard from './components/Card/Gridcard';
import Fslide from './components/main/Fslide';





function App() {
  return (
    <div>
      <Main/>
      <Fslide/>
      <Header/>
      <FirstSlide/>
      <SecondSlide/>
      <ThirdSlide/>
      <Gridcard/>
      <FifthSlide/>
      <BootstrapCarousel/>
      <NewSlider/>
      <Footer/>
      
      


    
    </div>
  );
}

export default App;