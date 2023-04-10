import React from 'react';

import {Route, Routes} from "react-router-dom";

import RegistrationPage from "../components/RegistrationPage/RegistrationPage";
import AuthPage from "../components/AuthPage/AuthPage";

const NavRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<RegistrationPage/>}/>
      <Route path={'/auth'} element={<AuthPage/>}/>
    </Routes>
  );
};

export default NavRouter;