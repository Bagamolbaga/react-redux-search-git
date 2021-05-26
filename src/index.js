import { StrictMode } from "react";
import ReactDOM from "react-dom";

//REDUX
import {Provider} from 'react-redux'
import {store} from './redux/store'
//REDUX

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </StrictMode>,
  rootElement
);
