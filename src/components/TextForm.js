import React , { useState } from 'react'

function TextForm (props) {
      const clickHandler = () => {
          // console.log("button has been clicked");
          let newText=text.toUpperCase();
          setText(newText)
          props.showAlert("converted to uppercase","success")
      }
      const clickHandler2 = () => {
        // console.log("button has been clicked");
        let newText2=text.toLowerCase();
        setText(newText2)
        props.showAlert("converted to lowercase","success")
      }

      const click=() => {
        let newtext="";
        setText(newtext)
        props.showAlert("cleared","success")
      }


      const changeHandler=(event)=>{
        // console.log("change has been made");
        setText(event.target.value)
      }

      const handlefindChange= (event)=>{
        findWord(event.target.value)
      }
      const handlereplaceChange=(event)=>{
        console.log(replaceWord(event.target.value))
      }
      const handlereplaceClick=()=>{
        let newText = text.replaceAll(fWord,rWord);
        setText(newText)
      }
      

      const [text, setText] = useState("");
      const [fWord , findWord] = useState("");
      const [rWord , replaceWord] = useState("");

      return (
        <>
        <div className="container my-3" style={{color:props.label}}>
          <h1>Words and Characters Count</h1>
          <p>{text.split(" ").length} words and {text.length} Characters</p>
          <p><b>Time to read below para :-</b>{0.008 * text.split(" ").length} minutes or {0.48 * text.split(" ").length} seconds </p>


        </div>
        <div className='container my-3' style={{color:props.label}}>
            <h1>Enter the Text to Analyze</h1>
            <div className="mb-3">
                <textarea className={`form-control bg-${props.mode}`} value={text} style={{color:props.label}}  onChange={changeHandler} id="exampleFormControlTextarea1" rows="10" placeholder='enter text area'></textarea>
            </div>
            <button type='button' onClick={clickHandler} className={`btn btn-${props.mode} m-2`}>Convert to Uppercase</button>
            <button type='button' onClick={clickHandler2}  className={`btn btn-${props.mode} m-2`}>Convert to lowercase</button>
            <button type='button' onClick={click}  className="btn btn-light m-2">Clear</button>
            {/* <h2>Preview</h2>
            <p>{text}</p> */}
            <div className={`wrapper1 accordion-item bg-${props.mode}`}>
                <h2 className="accordion-header" style={{color:props.label}} id="headingOne">
                  <button className={`accordion-button bg-${props.mode}`} style={{color:props.label}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>Find And Replace Word</b>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                      <div className="input-group mb-1">
                        <input type="text" className="form-control" value={fWord} onChange={handlefindChange} aria-describedby="button-addon2"/>
                        <input type="text" className="form-control" value={rWord} onChange={handlereplaceChange}  aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary mx-3" onClick={handlereplaceClick} type="button" id="button-addon2">Find and Replace</button>
                      </div>
                  </div>
                </div>
            </div>
            
            
        </div>
        </>
      )
}
export default TextForm;







