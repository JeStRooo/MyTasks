import React from 'react';

import {Route, Routes} from "react-router-dom";

import ThemeProvider from "../components/ThemeProvider/ThemeProvider";
import {SearchProvider} from "../components/SearchProvider/SearchProvider";

import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import AuthPage from "../components/AuthPage/AuthPage";
import MainPage from "../components/MainPage/MainPage";
import HomePage from "../components/HomePage/HomePage";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Routes>
          <Route path={'/main-page'} element={<MainPage/>}/>
          <Route path={'/home-page/:id'} element={<HomePage/>}/>
          <Route path={'/login-page'} element={<RegistrationPage/>}/>
          <Route path={'/auth'} element={<AuthPage/>}/>
        </Routes>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default AppRouter;