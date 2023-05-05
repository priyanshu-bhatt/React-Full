import React, { Component } from 'react'

export default class ApiClass extends Component {
    
  render() {
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src={this.props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.describe}</p>
    <a href={this.props.url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
