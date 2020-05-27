import React from 'react';
import './css/app.css';
import Header from './components/header'
import SliderSeccion from './components/sliderSeccion'
import CarruselSeccion from './components/carruselSeccion'
import WelcomeSeccio from './components/welcomeSeccion'
import OthersSeccion from './components/othersSeccion'
import FooterSeccion from './components/footerSeccion'
import SolutionsSeccion from './components/solutionsSeccion'
import SolutionsHeaderSeccion from './components/solutionsHeaderSeccion'
import CommentsSeccion from './components/commentsSeccion'
import OurNewsSeccion from './components/ourNewsSeccion'

function App() {
  return (
    <>
      <Header/>  
      <CarruselSeccion/>
      <WelcomeSeccio/>
      <SolutionsHeaderSeccion/>
      <SliderSeccion/>
      <OurNewsSeccion/>
      <OthersSeccion/>
      <CommentsSeccion/>
      <SolutionsSeccion/>
      <FooterSeccion/>
  </>
  );
}

export default App;
