import React,{useState,useCallback} from 'react';
import { useQuery,useMutation } from 'react-query';
import { getVideoList } from '../../utils/common';
import style from "./Nav.module.scss";
import logo from "../../image/logo-web.png";
import { useNavigate } from 'react-router';
import { BiSearch } from "react-icons/bi";
import { Submit ,Change } from '../../types/functions';
import { useDispatch } from 'react-redux';
import {searchText} from "../../features/VideoSlice"
import { SERVER_QUERY,MOCK_QUERY } from '../../utils/urls';
const Nav = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [text, setText] = useState<string>("");

   const handleSubmit:Submit = (e) => {
      e.preventDefault();
      dispatch(searchText(text))
      setText((prev) => {
         prev = ""
         return prev
      })
      navigate(`result/${text}`)
   }

   const handleChange:Change = useCallback((e) => {
      setText((prev) => {
         prev = e.target.value
         return prev
      })
   },[])

   const goBack = () => {
      navigate("/")
      dispatch(searchText(""))
   }

   return (
      <nav className={style.container}>
         <img src={logo} alt="logo" className={style.img} onClick={goBack}/>
            <form className={style.form} onSubmit={handleSubmit}>
               <input type="text" value={text} onChange={handleChange}/>
               <button> <BiSearch /> </button>
            </form>
         <div className={style.empty}></div>
      </nav>
   )
}

export default Nav

