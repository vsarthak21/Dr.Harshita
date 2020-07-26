import React, { useState } from 'react';
import FormModal from '../FormModal/FormModal';
import classes from "./Footerx.module.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import { common } from '@material-ui/core/colors';
import { isThisSecond } from 'date-fns';

class Footerx extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    renderModal() {
        this.setState(() => { return { showModal: true } })
    }

    closeModal() {
        this.setState(() => { return { showModal: false } })
    }


    render() {

        return (
            <div>
                <div id={"contact"} onClick={this.renderModal.bind(this)}>
                    <Footer
                        columns={[
                            {
                                icon: (
                                    <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                                ),
                                title: "Click here and drop your details. You will be contacted shortly!",
                                openExternal: false,

                            },
                        ]}
                        bottom="Made with ❤️ by Sarthak"
                    />


                </div>
                <FormModal show={this.state.showModal} onHide={this.closeModal.bind(this)} />
            </div>
        );
    }
}
export default Footerx;