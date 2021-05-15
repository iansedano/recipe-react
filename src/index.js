import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");


const mainContainer = React.createElement("div", null, 
    React.createElement("h1", null, "Hello World")
)

console.log(mainContainer)

ReactDOM.render(mainContainer, root);
