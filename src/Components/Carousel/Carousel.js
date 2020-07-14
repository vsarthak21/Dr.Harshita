import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from "./Carousel.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
class Carousel extends React.Component {
    render() {
        return (
            <div>
                <CarouselProvider
                    visibleSlides={1}
                    totalSlides={3}
                    step={1}
                    naturalSlideWidth={600}
                    naturalSlideHeight={200}
                    hasMasterSpinner
                    infinite={true}
                    isPlaying={true}
                    interval={5000}
                ><div className={classes.container}>
                        <Slider className={classes.slider} >
                            <Slide index={0}>
                                <Image tag="div" isBgImage={true}  className={classes.image} src={require("../../Images/banner1.jpg")}>
                                </Image>
                            </Slide>
                            <Slide index={1}>
                                <Image tag="div" isBgImage={true} className={classes.image} src={require("../../Images/banner2.jpg")}></Image>
                            </Slide>
                            <Slide index={2}>
                                <Image tag="div" isBgImage={true} className={classes.image} src={require("../../Images/banner3.jpg")}></Image>
                            </Slide>

                        </Slider>
                        <ButtonBack className={classes.buttonBack}><FontAwesomeIcon icon={faAngleLeft} /></ButtonBack>
                    <ButtonNext className={classes.buttonNext}><FontAwesomeIcon icon={faAngleRight} /></ButtonNext>
                    </div>
                    
                </CarouselProvider>
            </div>
        );
    }
} export default Carousel; 