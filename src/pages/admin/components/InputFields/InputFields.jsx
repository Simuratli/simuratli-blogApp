import React from 'react'
import './Input.scss'

function InputFields(props) {
  
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input
                {...props.elementConfig}
                onChange={props.onChange} />
        </div>
    )
}

export default InputFields
