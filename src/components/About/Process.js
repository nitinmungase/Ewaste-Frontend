import React from "react";
import process from "../../images/howworks.gif";
function Process(){
    return(
        <div className="alert alert-primary" role="alert" >
        <div style={{height:"50px"}}></div>
        <h1>This is Process component</h1>
        <img src={process} className="d-block w-99 mx-auto" alt="..." />
        </div>
    )
}
export default Process;