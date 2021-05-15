import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

const root = document.getElementById("root");


const mainContainer = React.createElement("div", null, 
    /*SECTION*/React.createElement("div", {className: "section"}, 
        React.createElement("h2", null, "Welcome!"),
        React.createElement("h3", null, "Looks like you are a Coder!")
    )
    
)

console.log(mainContainer)

ReactDOM.render(mainContainer, root);
