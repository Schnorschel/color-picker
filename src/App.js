import React, { useState } from 'react'
import InputRange from './components/InputRange'

const App = () => {
  // const [colParLevel, setColParLevel] = useState(0)
  // const colParLevelChanger = e => {
  //   // console.log('L: ' + e.target.value)
  //   setColParLevel(e.target.value)
  // }

  const [hueLevel, setHueLevel] = useState(Math.floor(Math.random() * 360))
  const hueChanger = e => {
    setHueLevel(e.target.value)
    // consoleColor()
  }

  const [saturationLevel, setSaturationLevel] = useState(
    Math.floor(Math.random() * 101)
  )
  const saturationChanger = e => {
    setSaturationLevel(e.target.value)
    // consoleColor()
  }

  const [lightnessLevel, setLightnessLevel] = useState(
    Math.floor(Math.random() * 101)
  )
  const lightnessChanger = e => {
    setLightnessLevel(e.target.value)
    // consoleColor()
  }

  const setRandomColor = () => {
    setHueLevel(() => Math.floor(Math.random() * 360 + 1))
    setSaturationLevel(() => Math.floor(Math.random() * 101))
    setLightnessLevel(() => Math.floor(Math.random() * 101))
    // consoleColor()
  }

  // const consoleColor = () => {
  //   console.log(
  //     'hsl(' + hueLevel + ',' + saturationLevel + '%,' + lightnessLevel + '%)'
  //   )
  // }

  // const colorSliders = [
  //   {
  //     colorParName: 'hue',
  //     colorParLetter: 'H',
  //     onChangeHandler: hueChanger,
  //     colorParValue: hueLevel,
  //     colorParMinValue: '1',
  //     colorParMaxValue: '360',
  //   },
  //   {
  //     colorParName: 'saturation',
  //     colorParLetter: 'S',
  //     onChangeHandler: saturationChanger,
  //     colorParValue: saturationLevel,
  //     colorParMinValue: '0',
  //     colorParMaxValue: '100',
  //   },
  //   {
  //     colorParName: 'lightness',
  //     colorParLetter: 'L',
  //     onChangeHandler: lightnessChanger,
  //     colorParValue: lightnessLevel,
  //     colorParMinValue: '0',
  //     colorParMaxValue: '100',
  //   },
  // ]

  return (
    <section className="colorModuleContainer">
      <section
        className="colorDisplay"
        style={{
          backgroundColor:
            'hsl(' +
            hueLevel +
            ',' +
            saturationLevel +
            '%,' +
            lightnessLevel +
            '%)',
        }}
      >
        &nbsp;
      </section>
      <section className="HSLLevels">
        <label className="hueValue value">{hueLevel}</label>
        <br />
        <label className="saturationValue value">{saturationLevel}%</label>
        <br />
        <label className="lightnessValue value">{lightnessLevel}%</label>
      </section>
      <section className="colorPickerContainer">
        {/* ++ */}
        <InputRange
          colorParName="hue"
          colParLetter="H"
          onChangeHandler={hueChanger}
          colorParValue={hueLevel}
          colorParMinValue="0"
          colorParMaxValue="100"
        />
        {/* <input
          type="range"
          name="hue"
          className="hue"
          onChange={hueChanger}
          value={hueLevel}
          min="0"
          max="360"
        ></input>
        <label htmlFor="hue">H</label> */}
        <br />

        <InputRange
          colorParName="saturation"
          colParLetter="S"
          onChangeHandler={saturationChanger}
          colorParValue={saturationLevel}
          colorParMinValue="0"
          colorParMaxValue="100"
        />
        {/* <input
          type="range"
          name="saturation"
          className="saturation"
          onChange={saturationChanger}
          value={saturationLevel}
          min="1"
          max="100"
        ></input>
        <label htmlFor="saturation">S</label> */}
        <br />

        <InputRange
          colorParName="lightness"
          colParLetter="L"
          onChangeHandler={lightnessChanger}
          colorParValue={lightnessLevel}
          colorParMinValue="0"
          colorParMaxValue="100"
        />
        {/* <input
          type="range"
          name="lightness" //{props.colorParName}
          className="lightness" // {props.colorParName}
          onChange={lightnessChanger}
          value={lightnessLevel}
          min="1"
          max="100"
        ></input>
          <label htmlFor="lightness">L</label> */}
      </section>
      <section className="buttonContainer randomizeContainer">
        <button className="randomize" onClick={setRandomColor}>
          Random
        </button>
      </section>
    </section>
  )
}

export default App
