import React,{useState,useCallback} from 'react'
import style from "./Nav.module.scss";
import logo from "../../image/logo-web.png";
import { BiSearch } from "react-icons/bi";
import { Submit ,Change } from '../../types/functions';
import {getVideoList} from "../../utils/common";
import { SERVER_QUERY } from '../../utils/urls';
import { useDispatch } from 'react-redux';
import {searchText} from "../../features/VideoSlice"

const Nav = () => {
   const dispatch = useDispatch();
   const [text, setText] = useState<string>("");

   const handleSubmit:Submit = (e) => {
      e.preventDefault();
      dispatch(searchText(text))
      setText((prev) => {
         prev = ""
         return prev
      })
   }

   const handleChange:Change = useCallback((e) => {
      setText((prev) => {
         prev = e.target.value
         return prev
      })
   },[])

   return (
      <nav className={style.container}>
         <img src={logo} alt="logo" className={style.img}/>
            <form className={style.form} onSubmit={handleSubmit}>
               <input type="text" value={text} onChange={handleChange}/>
               <button> <BiSearch /> </button>
            </form>
         <div className={style.empty}></div>
      </nav>
   )
}

export default Nav

