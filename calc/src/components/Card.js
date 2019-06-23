import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Calc } from '../store/actions/index'

class Card extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    handleKeyPress = (e) => {

        const distance = this.refs.distance.value
        const time = this.refs.time.value

        if( distance && time ) {

            const speed = distance/time

            this.setState(_ => {
                return {
                    distance,
                    time,
                    speed
                }
            }, _ => {
                this.props.Calc(this.state.speed)
            })

        }

    }

    render() {
        return (
            <div className="card">
    
                <div className="input_comp">
                    <div className="input_div">
                        <label> Travelled distance </label>
                        <input 
                            type='number' 
                            placeholder="distance in km"
                            id="distance" 
                            ref="distance"
                            onKeyUp = {this.handleKeyPress} />
                    </div>
                    
                    <div className="input_div">
                        <label> Travelled time </label>
                        <input                           
                            type='number' 
                            placeholder="time in hour"
                            id="time" 
                            ref="time"
                            onKeyUp = {this.handleKeyPress} />
                    </div>
                </div>
                            
    
                <div className="speed">
                    <span>
                    { this.state.speed
                        ? `Speed: ${Math.floor(this.state.speed)}mph`
                        : null }
                    </span>
                    <span style={{color: 'red'}}>
                    {   this.state.speed > 80
                        ? "Oops! That's too much! Take care"
                        : null }
                    </span>
                </div>
    
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Calc: (speed) => dispatch(Calc(speed))
    }
}

const mapStateToProps = (state) => {
    
    // console.log(state)
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)