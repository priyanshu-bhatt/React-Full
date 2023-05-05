import React, { useState } from 'react'

export default function TextArea() {
    var [text,settext]=useState("This is Text")
    const change=(e)=>{
        settext(e.target.value)
    }

    const upper=()=>{
        var upper = text.toUpperCase()
        settext(upper)
    }
    const lower=()=>{
        var lower = text.toLowerCase();
        settext(lower)
    }

    const clear=()=>{
        settext("")
    }
    const Copy=()=>{
        let Text = document.getElementById("box");
        Text.select()
        navigator.clipboard.writeText(Text.value);
    }
  return (
<div className="container my-3">
  <label  htmlFor="box1"  className="form-label">Example textarea</label>
  <textarea  value={text} onChange={(e)=>{change(e)}} className="form-control" id="box" rows="5"></textarea>
  <button onClick={upper} type="button" className="btn btn-primary">UpperCase</button>
<button onClick={lower} type="button" className="btn btn-secondary">LowerCase</button>
<button onClick={clear} type="button" className="btn btn-success">Clear</button>
<button onClick={Copy} type="button" className="btn btn-warning">Copy</button>

</div>

    
  )
}
