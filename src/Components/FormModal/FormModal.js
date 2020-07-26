import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import cls from "./FormModal.module.css";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import firebase from "firebase";
import firebaseConfig from '../../Firebase'
import moment from "moment"


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }
}));

const FormModal = (props) => {
    const [success, setsuccess] = useState(0);
    const [selectedName, setSelectedName] = useState("");
    const [selectedPhone, setSelectedPhone] = useState("");
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [error, setError] = useState("");
    const onChange = (event) => {
        const phoneRegex = "^[0-9]{10}$";
        if (event.target.value.match(phoneRegex) || event.target.value == "") {
            setError("");
            setSelectedPhone(event.target.value);
        } else {
            setError("Invalid Format")

        }
    }
    const handleDateChange = (event) => {
        setSelectedDate(event)
    }
    const handleNameChange = (event) => {
        setSelectedName(event.target.value)
    }
    const handleAgeChange = (event) => {
        setSelectedAge(event.target.value)
    }

    const onSubmit = () => {
        //console.log({ "Name": selectedName, "Age": selectedAge, "Phone No.": selectedPhone, "Slot": selectedDate }, moment(selectedDate).format('DD-MM-YYYY, h:mm:ss a'))

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.database().ref('/').child("Appointments").push({ "Name": selectedName, "Age": selectedAge, "Phone No": selectedPhone, "Slot": moment(selectedDate).format('DD-MM-YYYY, h:mm:ss a') })
        setsuccess("true");
    }

    const classes = useStyles();
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName={cls.modalBorder}
        >
            <Modal.Header closeButton className={cls.modalHeader}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h1>Book an Appointment!</h1>
                    <h6><i>Please Note:</i> Due to prevailing COVID-19 situation only online sessions are being provided to patients.</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body

            >
                {success ? <>
                    <h2 style={{color:"#17a2b8"}}>Your appointment request has been received. You will be contacted shortly! </h2>
                </>
                    :
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            required
                            id="name"
                            label="Patient Name"
                            type="text"
                            color="info"
                            onChange={handleNameChange}
                        />
                        <TextField
                            required
                            id="mobile"
                            label="Mobile No."
                            type="phone"
                            error={error}
                            onChange={onChange}
                        />
                        <TextField
                            required
                            id="age"
                            label="Age"
                            type="text"
                            onChange={handleAgeChange}

                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDateTimePicker
                                autoOk
                                required
                                variant="inline"
                                ampm={true}
                                label="Slot"
                                defaultValue=""
                                onChange={handleDateChange}
                                disablePast
                                format="yyyy/MM/dd HH:mm"
                            />
                        </MuiPickersUtilsProvider>
                    </form>}
            </Modal.Body>
            <Modal.Footer>
                {success ? <Button onClick={props.onHide} variant={"info"}>Okay</Button> :
                    <Button disabled={!(selectedName && selectedPhone && selectedAge && selectedDate)} onClick={onSubmit} variant={"info"}>Submit</Button>
                }
            </Modal.Footer>
        </Modal>
    );
}
export default FormModal;