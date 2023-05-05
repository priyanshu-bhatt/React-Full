import React, { useEffect, useState } from 'react'
import "../App.css"
export default function Main() {
    const [quote,setQuote]=useState([])

    function randomColor(){
        return Math.floor(Math.random()*255);
    }
function changeColor(color){
    document.body.style.background = color;
}

function makecolor(){
    changeColor("rgba("+ randomColor()+","+randomColor()+","+randomColor()+")")
}

    const getQuote=()=>{
        
        fetch("https://api.quotable.io/random").
        then((response)=>response.json())
        .then((data)=>setQuote(data))

        // let getquote = async()=>{
        //     let data = await fetch("https://api.quotable.io/random");
        //     let quotedata = await data.json();
        //     console.log(quote.content)
        //     setQuote(quotedata)
        // }
    }
    useEffect(()=>getQuote(),[])
    return (
    <div >

<span>{quote.content}</span><br/>
<h2>{quote.author}</h2>
<button onClick={()=>{getQuote();makecolor()}}>GetQuote</button>

    </div>
    
  )
}
