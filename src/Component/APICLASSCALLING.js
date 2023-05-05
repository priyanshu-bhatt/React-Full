import React, { Component } from 'react'
import ApiClass from './ApiClass'

export default class APICLASSCALLING extends Component {

    constructor(props){
    super(props)
    this.state={
        articles : [],

    }
    }
   async componentDidMount(){
        const  data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-03-30&sortBy=publishedAt&apiKey=fed65f61a6e94056b93b0efdf9dbfa01")
        const jsondata= await data.json()
        console.log(jsondata)
        this.setState({articles:jsondata.articles})
    }
  render() {
   
    return (
      <div className='container'>
        <div className='row'>
            {this.state.articles.map((e)=>{
                return(
                    <div className='col-md-4'>
                        <ApiClass title={e.title} img={e.urlToImage} describe={e.description} url={e.url}/>

                        </div>
                )
            })}
        </div>
        
      </div>
    )
  }
}
