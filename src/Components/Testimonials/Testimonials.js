import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import { Row, Column, Container, Button, Card } from "react-bootstrap";
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from "./Testimonials.module.css";
import Literals from "../Literals/Literals";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

class Testimonials extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const slides = Literals.testimonials.map((x) => {
            return <Slide index={x.index}>
                <Image tag="div" isBgImage={true} className={classes.image} >
                    <Card className={classes.rowCard} style={{border:"none"}}>
                        <Card.Body style={{position:'relative'}}>
                            <Card.Title><Box component="fieldset" mb={3} borderColor="transparent">
                                {/* <Typography component="legend">Read only</Typography> */}
                                <Rating name="read-only" value={x.Rating} readOnly />
                            </Box></Card.Title>
                            <Card.Text>
                                {x.Feedback}
                            </Card.Text>

                            <p style={{float:"bottom", fontStyle:"Italic", paddingLeft:"10%"}}><b>~{x["Full Name"]},{" "+x.Association}</b></p>

                        </Card.Body>
                    </Card>
                </Image>

            </Slide>
        })
        return (
            <div id="testimonials">
                <h1 className={classes.h1}>Testimonials</h1>
                <hr className={classes.hrline} ></hr>
                <Container>

                    <CarouselProvider
                        visibleSlides={window.matchMedia('(max-width: 600px)').matches ? 1 : 3 }
                        totalSlides={Literals.testimonials.length}
                        step={window.matchMedia('(max-width: 600px)').matches ? 1 : 3}
                        naturalSlideWidth={400}
                        naturalSlideHeight={300}
                        hasMasterSpinner
                        infinite={true}
                        isPlaying={true}
                        interval={5000}
                    ><div className={classes.container}>
                            <Slider className={classes.slider} >

                                {slides}

                            </Slider>

                            <ButtonBack className={classes.buttonBack}><FontAwesomeIcon icon={faAngleLeft} /></ButtonBack>
                            <ButtonNext className={classes.buttonNext}><FontAwesomeIcon icon={faAngleRight} /></ButtonNext>
                        </div>

                    </CarouselProvider>
                </Container>
            </div>
        );
    }
} export default Testimonials; 