import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import { Row, Column, Container, Button } from "react-bootstrap";
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from "./Carousel.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import FormModal from '../FormModal/FormModal';
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }

    }

    renderModal(){
        this.setState(()=>{return{showModal:true}})
    }

    closeModal(){
        this.setState(()=>{return{showModal:false}})
    }

    render() {
        return (
            <div id={"home"}>
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
                                <Image tag="div" isBgImage={true} className={classes.image} src={require("../../Images/banner1.jpg")}>
                                    <Container className={classes.content}>
                                    <Row>
                                        <h1 className={classes.h1}>Cervical Pain?</h1>
                                    </Row>
                                    <Row>
                                        <h3 className={classes.h3}>Don't worry, take appointment now!</h3>
                                    </Row>
                                    <Row>
                                        <Button variant="outline-info" onClick={this.renderModal.bind(this)} >Book Now</Button>
                                    </Row>
                                    </Container>
                                </Image>
                            </Slide>
                            <Slide index={1}>
                                <Image tag="div" isBgImage={true} className={classes.image} src={require("../../Images/banner2.jpg")}>
                                <Container className={classes.content}>
                                    <Row>
                                        <h1 className={classes.h1}>Severe Back Pain?</h1>
                                    </Row>
                                    <Row>
                                        <h3 className={classes.h3}>Begin the journey of pain free life now!</h3>
                                    </Row>
                                    <Row>
                                        <Button variant="info" onClick={this.renderModal.bind(this)}>Book Now</Button>
                                    </Row>
                                    </Container>
                                </Image>
                            </Slide>
                            <Slide index={2}>
                                <Image tag="div" isBgImage={true} className={classes.image} src={require("../../Images/banner3.jpg")}>
                                <Container className={classes.content}>
                                    <Row>
                                        <h1 className={classes.h1}>Sports Injury?</h1>
                                    </Row>
                                    <Row>
                                        <h3 className={classes.h3}>We will have you in the field soon.</h3>
                                    </Row>
                                    <Row>
                                        <Button variant="outline-info" onClick={this.renderModal.bind(this)}>Book Now</Button>
                                    </Row>
                                    </Container>
                                </Image>
                            </Slide>

                        </Slider>
                        <ButtonBack className={classes.buttonBack}><FontAwesomeIcon icon={faAngleLeft} /></ButtonBack>
                        <ButtonNext className={classes.buttonNext}><FontAwesomeIcon icon={faAngleRight} /></ButtonNext>
                        <FormModal show={this.state.showModal} onHide={this.closeModal.bind(this)}/>
                    </div>

                </CarouselProvider>
            </div>
        );
    }
} export default Carousel; 