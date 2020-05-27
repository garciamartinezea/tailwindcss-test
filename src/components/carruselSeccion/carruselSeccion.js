import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import {images} from '../data'
import CarruselSeccionUI from './carruselSeccion.ui'
import 'react-alice-carousel/lib/alice-carousel.css'

class CarruselSeccion extends React.Component {
     state = {
        responsive: { 
            0: { items: 1 }
        }, 
        currentIndex: 0,
        itemsInSlide: 1
    }

    slidePrevPage = () => {
        const currentIndex = this.state.currentIndex - this.state.itemsInSlide
        this.setState({ currentIndex })
    }
     
    slideNextPage = () => {
        const { itemsInSlide, galleryItems: { length }} = this.state
        let currentIndex = this.state.currentIndex + itemsInSlide
        if (currentIndex > length) currentIndex = length
     
        this.setState({ currentIndex })
    }
     
    handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
    }

    render() {
        return (
            <section id="home-carousel" style={{position: 'relative'}}>
            <AliceCarousel
                slideToIndex={0}
                responsive={this.state.responsive}
                onInitialized={this.handleOnSlideChange}
                onSlideChanged={this.handleOnSlideChange}
                onResized={this.handleOnSlideChange}
                dotsDisabled={true}
                buttonsDisabled={true}
                autoPlay={true}
                autoPlayInterval={5000}
                ref={(el) => (this.Carousel = el)}
                >
                { images.map((item, index) => ( <CarruselSeccionUI picture={item.picture} alt={`${item.altText}`} key={index} /> )) }
            </AliceCarousel>
            <div className="w-full  flex justify-center items-center" style={{marginTop:'-30px'}}>
                {
                    images.map((item, index) =>
                        <button key={`image-${index}`} className={`ml-5 py-2 px-2 border border-gray-400 border-solid rounded-full z-40 ${this.state.currentIndex!==index ? 'bg-transparent':'bg-gray-900'}`} onClick={()=>this.Carousel.slideTo(index)} />
                    )
                }
            </div> 
         </section>
        );
    }
}

export default CarruselSeccion