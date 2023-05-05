import React, { Component } from 'react'
import "../App.css"
export default class ButtonWithColor extends Component {
    constructor(props){
        super(props)
     this.state={
        classs: "black"
     } 
    }
red=()=>{
    this.setState({
        classs: "red"
    })
}
black=()=>{
    this.setState({
        classs: "black"
    })
}
    green=()=>{
        this.setState({
            classs:"green"
        })
    }

    brown=()=>{
        this.setState({
            classs: "brown"
        })
    }
yellow=()=>{
    this.setState({
        classs: "yellow"
    })
}

  render() {
    return (
      <div>
        
        <h1 className={this.state.classs}> Hello</h1>
        <button onClick={this.red}>Red</button>
        <button onClick={this.green}>Green</button>
        <button onClick={this.yellow}>Yellow</button>
        <button onClick={this.brown}>brown</button>
      </div>
    )
  }
}
