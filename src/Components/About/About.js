import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Literals from "../Literals/Literals";
import classes from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHSquare,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
const About = props => {
    return (
        <div id={"about"}>
            <Container>
            <h1 className={classes.h1} >About</h1>
                        <hr className={classes.hrline} ></hr>
                        {/* <hr className={classes.hrline}></hr> */}
                <Row style={{ marginTop: "2%" }}>

                    <Col md={8}>
                        
                        <p className={classes.p1}>
                            {Literals.about[0]}
                        </p>
                        <p style={{ textAlign: "left" }}>
                            {Literals.about[1]}
                            <ul className={classes.list}>
                                <li>
                                    <FontAwesomeIcon icon={faHSquare} style={{color:"#5bc0de"}} /><span className="ml-3">{Literals.about[2]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[3]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[4]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[5]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faHSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[6]}</span>
                                </li>
                            </ul>
                        </p>
                        <p style={{ textAlign: "left" }}>
                            {Literals.about[7]}
                            <ul className={classes.list}>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[8]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[9]}</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[10]}</span>

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[11]}</span>

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[12]}</span>

                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPlusSquare} style={{color:"#5bc0de"}}/><span className="ml-3">{Literals.about[13]}</span>

                                </li>
                            </ul>
                        </p>
                        <p className={classes.p1}>{Literals.about[14]}</p>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
export default About;