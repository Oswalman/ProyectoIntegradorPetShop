import React, { Component } from 'react'

export default class message extends Component {
    render() {
        return (
           
            <p>
                {this.props.usuario}:{this.props.message}
            </p>
           
                
           
        )
    }
}
