import React from 'react';
import './App.css';

import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <RegistrationPage/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
