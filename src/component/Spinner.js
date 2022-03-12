import React, { Component } from 'react'
import spin from './load.gif'

export class Spinner extends Component {
   
    render() {
        return (
            <div className='text-center'>
                <img src={spin} alt='load'/>
            </div>
        )
    }
}

export default Spinner
