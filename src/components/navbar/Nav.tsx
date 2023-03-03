import React from 'react'
import style from "./Nav.module.scss";
import logo from "../../image/logo-web.png";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
   return (
      <nav className={style.container}>
         <img src={logo} alt="logo" className={style.img}/>
            <form className={style.form}>
               <input type="text"/>
               <button> <BiSearch /> </button>
            </form>
         <div className={style.empty}></div>
      </nav>
   )
}

export default Nav

