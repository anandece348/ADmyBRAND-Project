import React from "react";
import  ReactDOM  from "react-dom";
    const AddArgument = ()=>{
    const element = function(){
        const divElement = React.createElement("div");
        const selectElement = React.createElement("select");
        const optionElement1 = React.createElement("option");
        optionElement1.innerHTML = false;
        const optionElement2 = React.createElement("option");
        optionElement2.innerHTML = true;
        selectElement.appendChild(optionElement1);
        selectElement.appendChild(optionElement2);
        divElement.appendChild(selectElement);
        return divElement;
    }

    return <div className="divElement">
        <button id="button" onClick={element} style={{marginLeft: "3rem", marginBottom: "3rem"}}>+ add Argument </button>
         
    </div>
}
export default AddArgument;