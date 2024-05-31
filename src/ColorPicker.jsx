import React, {useState} from'react';
import './ColorPicker.css'

const ColorPick = () => {
const [color, setColor] = useState("#fff");

const handleColorChange = (event) => {
    setColor(event.target.value)
}

    return(
        <div className="color-picker-container">
            <div><h1>Color Picker</h1></div>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>{color}</p>
            </div>
            <div className='color-input'>
                <label>
                 Choose Color:
                 </label>
                <br />
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </div>
    )
}

export default ColorPick