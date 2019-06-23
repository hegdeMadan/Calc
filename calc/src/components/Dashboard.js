import React, { Component } from 'react'

import Instructions from './Instructions'
import Card from './Card'
import Footer from './Footer'

class Dashboard extends Component {
    
    constructor() {
        super()
        
        this.state = {

        }
    }


    render() {
        return (
           <div>
               <Instructions />
                <Card />
                <Footer />
           </div>
        )
    }
}

export default Dashboard