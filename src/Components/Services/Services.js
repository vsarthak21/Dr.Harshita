import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Literals from "../Literals/Literals";
import classes from "./Services.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id={"services"} style={{ backgroundColor: "#EEF4F4", margin: "2%" }}>
            <h1 className={classes.h1}>Sevices</h1>
            <hr className={classes.hrline} ></hr>

            <Row >
                <Card className={classes.rowCard}>
                    <Card.Body>
                        <Card.Title>Neurological Conditions</Card.Title>
                        <Card.Text>
                            CVA,
                            Hemiparesis,
                            GBS (Guillain-Barré syndrome),
                            Vestibular rehabilitation such as vertigo,
                            PIVD,
                            Cerebral palsy,
                            DMD,
                            Bells Palsy and Facial Palsy
                            </Card.Text>
                    </Card.Body>
                </Card>
                <Card className={classes.rowCard}>
                    <Card.Body>
                        <Card.Title>Orthopeadic and sports rehabilitation</Card.Title>
                        <Card.Text>
                            ACL,MCL repair rehabilitation,
                            Meniscal injury,
                            Degenerative cases such as OA, frozen shoulder,
                            TKR and THR rehabilitation.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <h2 className={classes.h2}>Know Your <span style={{color:"#5bc0de"}}>Pain</span></h2>
            <h6 className={classes.h5}>Dr. Harshita strives to provide you with an exceptional quality of care across all the<br></br> services which range from, physiotherapy, ergonomics and more. </h6>
            <Row >
                <Col md={4} className={classes.leftCol} style={{ marginTop: "2%", display: "flex", flexDirection: "column" }}>
                    <Row>
                        <label style={{fontWeight:"bolder"}}>Joint and Nerve pain</label>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-stretching-her-body-on-the-floor.svg")}></img>
                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <label style={{fontWeight:"bolder"}}>Sports Injuries</label>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-standing-on-her-arms.svg")}></img>
                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <label style={{fontWeight:"bolder"}}>Shoulder/rotator cuff injuries</label>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-on-her-knees-stretching-arms.svg")}></img>
                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <label style={{fontWeight:"bolder"}}>Spinal pain</label>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-stretching-back.svg")}></img>
                    </Row>
                </Col>
                <Col md={4}><img className={classes.middle} src={require("../../Images/middle.jpg")}></img></Col>
                <Col md={4} className={classes.RightCol} style={{ marginTop: "2%", display: "flex", flexDirection: "column", marginBottom: "12%" }}>
                    <Row>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-flexing-body.svg")}></img>
                        <label style={{fontWeight:"bolder"}}>Post surgical rehabilitation</label>

                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-stretching-left-leg.svg")}></img>
                        <label style={{fontWeight:"bolder"}}>Occupational injuries</label>
                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-sitting-on-the-floor-stretching-left-leg.svg")}></img>
                        <label style={{fontWeight:"bolder"}}>Muscle strains</label>

                    </Row>
                    <Row style={{ marginTop: "10%" }}>
                        <img className={classes.icon} color="white" src={require("../../Images/woman-on-her-knees-looking-up.svg")}></img>
                        <label style={{fontWeight:"bolder"}}>Chronic pain syndromes</label>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}
export default Services;