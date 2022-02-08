import React, { useState } from 'react';

export default function TestForm(props) {
  const handleUpCLick = () => {
    let newText  = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to UpperCase", "success");
  }

  const handleLowCLick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to LowerCase", "success");
  }

  const handleCapsFCLick = () => {
    let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    setText(newText);
    props.showalert("Converted to 1st Caps", "success");
  }
  
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showalert("Cleared the test!!", "danger");
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text is copied", "success")
  }

  const handleClearExtSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Text has proper spacing", "success")
  }
  
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style = {{color:props.mode === 'light' ? '#26282e':'white'}}>
          <h1><center>{props.heading}</center></h1>
              <div className="mb-3">
                  <textarea className="form-control" value = {text} onChange = {handleOnChange} style = {{backgroundColor:props.mode === 'dark' ? '#26282e' : 'white', color:props.mode === 'light' ? '#26282e':'white'}} id="my-box" rows="8"></textarea>
              </div>
              <center>
                <button disabled = {text.length === 0} className="btn btn-info btn-sm mx-2 my-2" onClick = {handleUpCLick}>Convert to UpperCase</button>
                <button disabled = {text.length === 0}className="btn btn-info btn-sm mx-2 my-2" onClick = {handleLowCLick}>Convert to LowerCase</button>
                <button disabled = {text.length === 0}className="btn btn-info btn-sm mx-2 my-2" onClick = {handleCapsFCLick}>1st letter Caps</button>
                <button disabled = {text.length === 0}className="btn btn-info btn-sm mx-2 my-2" onClick = {handleClearExtSpace}>Clear Extra Spaces</button>
                <button disabled = {text.length === 0}className="btn btn-info btn-sm mx-2 my-2" onClick = {handleCopy}>Copy Test</button><br />
                <button disabled = {text.length === 0}className="btn btn-danger btn-sm mx-2 my-2" onClick = {handleClearText}>CLEAR TEXT</button>
              </center>  
      </div>
      <center>
      <div className="container my-5" style = {{color:props.mode === 'light' ? '#26282e':'white'}}>
        <h2>Your text summary</h2>
        <p>
          Word : {text.split(/\s/).filter((element)=>{return element.length !== 0}).length} and Characters : {text.length}
        </p>
        <h4>
          Preview
        </h4>
        <p>
          {text.length>0?text:"Enter Something in textbox abovefor Preview"}
        </p>
      </div>
      </center>
    </>
  )
}