import React, { Component } from 'react'

export default class MountingMethods extends Component {
    constructor(props){
        console.log("hello this is constructor")
        super(props)
        this.state={
            name:"priyanshu"

        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("hii this is get derived")
    //     return {name: props.namee}  
    // }

    componentDidMount(){
        console.log("this is component did mount")
            setTimeout(()=>{
                this.setState({
                    name: "Hello"
                })
            },3000)
        }
  render() {
    console.log("this is render")
    return (
      <div>
        
        <h2> This is name: {this.state.name}</h2>
      </div>
    )
  }
}
