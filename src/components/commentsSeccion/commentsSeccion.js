import React from 'react';
import CommentsSeccionUI from './commentsSeccion.ui'
import AliceCarousel from 'react-alice-carousel'
import {comments} from '../data'
import 'react-alice-carousel/lib/alice-carousel.css'

class CommentsSeccion extends React.Component {
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
                autoPlayInterval={10000}
                ref={(el) => (this.Carousel = el)}
            >
                { comments.map((item, index) => ( <CommentsSeccionUI item={item} key={`Comments-${index}`}/>  )) }
            </AliceCarousel>
            <div className="w-full  flex justify-end items-center py-3   pr-6" style={{backgroundColor:'#17a59a'}} >
                {
                    comments.map((item, index) =>
                        <button key={`comment-${index}`} className={`ml-3 py-2 px-2 border border-white border-solid rounded-full ${this.state.currentIndex!==index ? 'bg-transparent':'bg-white'}`} onClick={()=>this.Carousel.slideTo(index)} />
                    )
                }
            </div>    
         </section>

        );
    }
}

export default CommentsSeccion