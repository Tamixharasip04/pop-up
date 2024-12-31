import React from 'react'
import { useState } from 'react'
import './bootstrap-5.0.2-dist/css/bootstrap.min.css'


export default function Popup() {
    let [istrue,setClose]=useState(false)

    function popopen(){
        setClose(true)
    }

    function popclose(){
        setClose(false)
    }
  return (
    <div className='container'>
        <button type='submit' className='btn' onClick={popopen}>Submit</button>
<div className={`popup ${istrue ? 'open' : ''}`}>
    <img src="https://media.istockphoto.com/id/1094780808/vector/approval-symbol-check-mark-in-a-circle-drawn-by-hand-vector-green-sign-ok-approval-or.jpg?s=170667a&w=0&k=20&c=8vEiregXFn0KKWpNPPfZ23RZS8AuQywkRWCgbvL9RVI=" alt='right'/>
    <h1>Thank you</h1>
    <p>Your details has been Successfully submitted. Thanks!!</p>
    <button type='button ' onClick={popclose}>Ok</button>
</div>
    </div>
  )
}
