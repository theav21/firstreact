import React, { useState } from "react";

function TextForm(props) {
  const clickHandler = () => {
    // console.log("button has been clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "success");
  };
  const clickHandler2 = () => {
    // console.log("button has been clicked");
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("converted to lowercase", "success");
  };

  const click = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("cleared", "success");
  };

  const changeHandler = (event) => {
    // console.log("change has been made");
    setText(event.target.value);
  };

  const handlefindChange = (event) => {
    findWord(event.target.value);
  };
  const handlereplaceChange = (event) => {
    console.log(replaceWord(event.target.value));
  };
  const handlereplaceClick = () => {
    let newText = text.replaceAll(fWord, rWord);
    setText(newText);
  };

  const [text, setText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  return (
    <>
      <div className="container my-3" style={{ color: props.label }}>
        <h1>Words and Characters Count</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} Characters
        </p>
        <p>
          <b>Time to read below para :-</b>
          {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes or{" "}
          {0.48 * text.split(" ").filter((element)=>{return element.length!=0}).length} seconds{" "}
        </p>
      </div>
      <div className="container my-3" style={{ color: props.label }}>
        <h1>Enter the Text to Analyze</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            style={{ color: props.label , backgroundColor:props.mode }}
            onChange={changeHandler}
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length===0}
          type="button"
          onClick={clickHandler}
          className={`btn btn-${props.color} m-2`}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length===0}
          type="button"
          onClick={clickHandler2}
          className={`btn btn-${props.color} m-2`}
        >
          Convert to lowercase
        </button>
        <button disabled={text.length===0} type="button" onClick={click} className="btn btn-light m-2">
          Clear
        </button>
        {/* <h2>Preview</h2>
            <p>{text}</p> */}
            <div className="wrapper my-3">
              
              <div className="input-group mb-1">
                <input
                  type="text"
                  className="form-control"
                  style={{backgroundColor:props.mode}}
                  value={fWord}
                  onChange={handlefindChange}
                  aria-describedby="button-addon2"
                />
                <input
                  type="text"
                  className="form-control"
                  style={{backgroundColor:props.mode}}
                  value={rWord}
                  onChange={handlereplaceChange}
                  aria-describedby="button-addon2"
                />
                <button
                  className={`btn btn-${props.mode} m-2`}
                  style={{ color: props.label ,backgroundColor:props.mode }}
                  onClick={handlereplaceClick}
                  type="button"
                >
                  Find and Replace
                </button>
              </div>
            </div>
      </div>
    </>
  );
}
export default TextForm;
