 import React from "react";
 const ADM = ()=>{

    return <div style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem",
        marginBottom: "3rem",

    }}>
        <button id="myarg">my arg</button>
        <select>
            <option id="falseId">false</option>
            <option>true</option>
        </select>
        <button>X</button>
    </div>
}
export default ADM;