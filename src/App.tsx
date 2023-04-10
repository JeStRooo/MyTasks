import React from 'react';

import {BrowserRouter} from "react-router-dom";

import NavRouter from "./router/NavRouter";

import {Provider} from "react-redux";
import {store} from "./store";

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <NavRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;