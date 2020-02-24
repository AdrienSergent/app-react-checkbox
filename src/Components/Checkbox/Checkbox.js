import React from "react"; 

const Checkbox = (props) => { 
    return ( 
    <form> 
        <label> 
            {props.value}
            <input 
                name={props.value}
                value={props.value}  
                type="checkbox" 
                checked={props.isChecked} 
                onChange={props.handleCheckbox} /> 
        </label>
    </form> 
    )
}

export default Checkbox; 