import React from 'react' //, { useState } from 'react'

const InputRange = props => {
  // const colParLevelChanger = e => {
  //   // console.log('L: ' + e.target.value)
  //   setColParLevel(e.target.value)
  // }
  return (
    <>
      <input
        type="range"
        name={props.colorParName}
        className={props.colorParName}
        onChange={props.onChangeHandler}
        value={props.colorParValue}
        min={props.colorParMinValue}
        max={props.colorParMaxValue}
      ></input>
      <label htmlFor={props.colorParName}>{props.colParLetter}</label>
    </>
  )
}

export default InputRange
