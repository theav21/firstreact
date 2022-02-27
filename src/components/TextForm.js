import React from 'react'

export default function (props) {
  return (
    <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
        </div>
    </div>
  )
}
