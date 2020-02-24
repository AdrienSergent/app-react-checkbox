import React from "react"; 

const AllCheckbox = (props) => { 
    return ( 
        <label> 
            Select All or Disable All
            <input   
                type="checkbox" 
                checked={props.isChecked} 
                onChange={props.handleAllCheckbox} /> 
        </label>
    
    )
}

export default AllCheckbox; 