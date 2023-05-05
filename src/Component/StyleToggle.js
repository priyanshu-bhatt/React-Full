import React, { Component } from 'react'
import '../App.css'
export default class StyleToggle extends Component {
    constructor(props){
        super(props)
        this.state={
            classactive: false
        }
    }
    toggle=()=>{
        this.setState({
classactive:!this.state.classactive
        })
        console.log("button clicked")
    }
  render() {
    return (
      <div>
        
<h1 className={this.state.classactive?"active":""}> hello</h1>
<button onClick={this.toggle}> Click</button>
      </div>
    )
  }
}
