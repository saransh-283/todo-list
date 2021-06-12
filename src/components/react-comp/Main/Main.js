import React from "react";
import { Provider } from "react-redux";
import connected from "../../react-redux-connect/connect-comp";
//import stateMaps from "../../react-redux-connect/maps";
import "./Main.scss";

const Main = () => {
  return (
    <div id="main-cont">
      <Provider store={connected.store}>
        <connected.AllTodoConnected />
        <connected.FinishedConnected />
        <connected.NewTodoConnected />
        <connected.UnfinishedConnected />
        <connected.TodoConnected />
      </Provider>
    </div>
  );
};

export default Main;
