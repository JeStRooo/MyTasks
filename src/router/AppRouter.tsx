import React from 'react';

import {Route, Routes} from "react-router-dom";

import ThemeProvider from "../components/ThemeProvider/ThemeProvider";

import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import AuthPage from "../components/AuthPage/AuthPage";
import MainPage from "../components/MainPage/MainPage";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path={'/main-page'} element={<MainPage/>}/>
        <Route path={'/login-page'} element={<RegistrationPage/>}/>
        <Route path={'/auth'} element={<AuthPage/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default AppRouter;