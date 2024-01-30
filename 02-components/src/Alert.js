import React from "react";

export default function Alert(props){
    return (
    <div style={{backgroundColor: "brown"}}>
        {props.message}
    </div>
    )
}