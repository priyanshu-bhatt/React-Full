import React, { Component } from 'react'

export default class ClassBased extends Component {
  render() {
    const skillset= this.props.number.map((x)=><li>{x}</li>)
    return (
      <div>
        
        <h1>This is Class Based Component {this.props.name}</h1>
        <h2>{this.props.number.map((x)=><li>{x}</li>)}</h2>

        </div>
    )
  }
}
