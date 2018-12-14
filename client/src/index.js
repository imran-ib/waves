import React from "react";
import ReactDOM from "react-dom";
import ReduxToastr from "react-redux-toastr";

import { BrowserRouter } from "react-router-dom";
import "./Resources/css/styles.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import Routes from "./layout/Routes";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { configureStore } from "./store";
const store = configureStore(); // pass this to Provider

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
