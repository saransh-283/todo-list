import React from "react";
import { Provider } from "react-redux";
import connected from "../../react-redux-connect/connect-comp";
import "./Main.scss";


const Main = () => {
  return (
    <div>
      <Provider store={connected.store}>
        <div id="main-cont">
        <connected.NewTodoConnected />
        <div></div>
        <connected.UnfinishedConnected/>
        <connected.FinishedConnected />
        </div>
      </Provider>
    </div>
  );
};

export default Main;
