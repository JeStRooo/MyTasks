import React from 'react';

import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";

import AppRouter from "./router/AppRouter";

import {store} from "./store/store";

import './App.css';
import './normalize.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;