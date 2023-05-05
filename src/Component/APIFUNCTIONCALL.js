import React, { useCallback, useEffect, useState } from 'react'
import APIFunction from './APIFunction'

export default function APIFUNCTIONCALL() {
    const [articles,setarticle]=useState([])

    let GetNews= async()=>{
        const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-03-30&sortBy=publishedAt&apiKey=fed65f61a6e94056b93b0efdf9dbfa01")
        const jsondata = await data.json()
        setarticle(jsondata.articles)
    }
   
    useEffect(()=>{
        GetNews()
    })
  return (
    <div>
<div className='row'>
            {articles.map((e)=>{
                return(
                    <div className='col-md-4'>
                        <APIFunction title={e.title} img={e.urlToImage} describe={e.description} url={e.url}/>

                        </div>
                )
            })}
        </div>
        
    </div>
  )
}
