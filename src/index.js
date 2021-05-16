import React from "react";
import ReactDOM from "react-dom";
import "./style.css"

const users = require('./users.json')

// const mainContainer = React.createElement("div", null, 
//     users.map((user, i) => {
//         return React.createElement(
//             "section",
//             {className: "section", key: i},
//             React.createElement("h2", null, `${user.first_name} ${user.last_name}`),
//             React.createElement("img", {src: user.avatar, height: "100px", width: "100px"}, null),
//             React.createElement("h3", null, `"${user.preferences.fav_phrases.at_bar}"`)
//         )
//     })
// )

function MainContainer() {
    return (
        users.map((user,i) => {
            return <div key = {i} className = "section">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <img src= {user.avatar} height= "100px" width= "100px"></img>
                <h3>{`"${user.preferences.fav_phrases.at_bar}"`}</h3>
            </div>
        })
    )
    
}

const root = document.getElementById("root");
ReactDOM.render(<MainContainer/>, root);
