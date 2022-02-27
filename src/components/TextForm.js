import React , { useState } from 'react'

function TextForm (props) {
      const clickHandler = () => {
          // console.log("button has been clicked");
          let newText=text.toUpperCase();
          setText(newText)
      }
      const clickHandler2 = () => {
        // console.log("button has been clicked");
        let newText2=text.toLowerCase();
        setText(newText2)
    }


      const changeHandler=(event)=>{
        // console.log("change has been made");
        setText(event.target.value)
      }

      const [text, setText] = useState("");

      return (
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="15" placeholder='enter text here'></textarea>
            </div>
            <button type='button' onClick={clickHandler}  className="btn btn-primary m-3">Convert to Uppercase</button>
            <button type='button' onClick={clickHandler2}  className="btn btn-danger m-3">Convert to lowercase</button>
        </div>
      )
}
export default TextForm;