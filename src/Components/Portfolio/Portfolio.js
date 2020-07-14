import React, {Component} from 'react';
import Navibar from "../Navibar/Navibar.js"
import Carousel from '../Carousel/Carousel.js';

class Portfolio extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Navibar/>
                <Carousel/>
            </div>
        )
    }
}

export default Portfolio;