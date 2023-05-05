import React, { Component } from 'react'

export default class StateInClass extends Component {
    
    constructor(){
        super();
        this.state = {
            count:0,
            color: "blue",
            name: "like",
            
        }
        
    }  
    addO=()=>{
        this.setState({count:this.state.count+1})
    }
    subOne=()=>{
        this.setState({count:this.state.count-1})
    }
    changeName=()=>{
        this.setState({name:this.state.name="dislike"})
    }

    
  render() {
    return (
      <div>
        <h1> The count is : {this.state.count} color is : {this.state.color} and My name is {this.state.name}</h1>
        <button btn-info onClick={this.addO}>Count To change state</button>
        <button onClick={this.subOne}>Button to sub 1</button>
        <button onClick={()=>{this.setState({count:this.state.count+2})}}>Button to add 2</button>
        <button onClick={()=>{this.setState({color: this.state.color="pink"})}}>ColorChanged</button>
        <button onClick={this.changeName}>ChangeName</button>
        {/* <h2> Changed state: {this.setState({count: this.state.count+1}) }</h2> */}
      </div>
    )
  }
}


