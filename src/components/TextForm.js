import React,{useState} from 'react'

export default function TextForm() {
    const upChange=(event)=>{
        setText(event.target.value)
    }
    const upCase=()=>{
        setText(text.toUpperCase())
    }
    const lowerCase =()=>{
        setText(text.toLowerCase())
    }
    const cleanUp =()=>{
       setText("");
       alert("Text cleaned successfully.");
        // console.log(text.charAt(0).toUpperCase() + text.slice(1))
    }
    const copyToClickboard=()=>{
        navigator.clipboard.writeText(text);
        alert("Text copied");
    }
    const removeExSpaces=()=>{
        let arr = text.split(/[  ]+/);
        setText(arr.join(" "));
    }
    const [text, setText]=useState("Write here");
  return (
  <>
  <div className="container">
    <h3>Write text here</h3>
    <textarea className='form-control'value={text} onChange={upChange} name="" id=""  rows="8"></textarea>
    <button onClick={upCase} className="btn btn-primary m-2">UpperCase</button>
    <button onClick={lowerCase} className="btn btn-primary m-2">LowerCase</button>
    <button onClick={cleanUp} className="btn btn-primary m-2">CleanText</button>
    <button onClick={copyToClickboard} className="btn btn-primary m-2 btn-clipboard">CopyText</button>
    <button onClick={removeExSpaces} className="btn btn-primary m-2">RExSpaces</button>
    
  </div>
  <div className="container">
    <h2 className='m-2'>Text Summary</h2>
    <div className=''>
     <b className='text-danger'>  Characters</b> :  {text.length}<br/>
     <b className='text-danger'> Words</b> : {text.split(" ").length-1}<br/>
     <b className='text-danger'> Sentenses</b> : {text.split(".").length-1}<br/>
     <b className='text-danger'> Read time</b> : {(0.008*(text.split(" ").length-1)).toFixed(3)} m
     <h3 className="m-2">Preview</h3>
     <p className="border border-2 rounded-2 border-danger bg-secondary">{text.length>0?text:'Writer something in above box to preview.'}</p>
    </div>
  </div>
  </>
  )
}
