import React from "react";
import ReactDOM from "react-dom";
import "jquery";
import Presentational from './components/react-comp/Main/Main'
import "./assets/css/style.scss";
import "./assets/html/help.html";
import "./components/react-comp/AllItems/AllTodo.scss";
import "./components/react-comp/FinishedItems/Finished.scss";
import "./components/react-comp/NewTodo/NewTodo.scss";
import './components/react-comp/Main/Main.scss'

ReactDOM.render(<Presentational />, document.getElementById("root"));

$("#text").html("Text");
