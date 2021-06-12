import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import Main from "./components/react-comp/Main/Main";
import "./assets/css/style.scss";
import "./assets/html/help.html";
//import "./components/react-comp/AllTodo/AllTodo.scss";
//import "./components/react-comp/Finished/Finished.scss";
//import "./components/react-comp/NewTodo/NewTodo.scss";
//import "./components/react-comp/Main/Main.scss";
//import "./components/react-comp/Unfinished/Unfinished.scss";

ReactDOM.render(<Main />, document.getElementById("root"));

$("#text").html("Text");
