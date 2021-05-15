import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

const root = document.getElementById("root");

const details = [
    {name: "name", value: "Nepal"},
    {name: "population", value: "28,095,714"},
    {name: "area", value: "147,516 km2"},
    {name: "main religion", value: "Hinduism"},
]

const mainContainer = React.createElement("div", null, 
    React.createElement("div", {className: "section"}, 
        React.createElement("h2", null, "Welcome!"),
        React.createElement("h3", null, "Looks like you are a Coder!")
    ),
    React.createElement("div", {className: "section"},
        React.createElement("h2", null, "Some info about a Country"),
        details.map((detail) => {
            return React.createElement("h3", null, `${detail.name} - ${detail.value}`)
        })
    )
    
)

console.log(mainContainer)

ReactDOM.render(mainContainer, root);
