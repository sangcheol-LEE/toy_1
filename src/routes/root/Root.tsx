import React from 'react'
import style from "./Root.module.scss";
import { Outlet } from 'react-router';
import Nav from '../../components/navbar/Nav';

const Root = () => {
   return (
      <>
         <Nav/>
         <Outlet />
      </>
   )
}

export default Root