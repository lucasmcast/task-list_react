import React, { Component } from 'react';
import Container from '../Container'
import './style.css'

class Main extends Component{

    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <main>
                <Container/>
            </main>
          
        )
    }
}

export default Main;