import React,{useCallback,useMemo} from 'react'
import style from "./Video.module.scss";
import { useNavigate ,useParams} from 'react-router';
import { Items } from '../../types/videoData';
import Axios,{AxiosResponse} from "axios";
import { useQuery } from 'react-query';
import { responseType } from '../../types/newVideo';
import {useSelector} from "react-redux";
import { ReactNode } from 'react';
import { RootState } from '../../app/store';

import dayjs from 'dayjs'


const Video:React.FC<Items> = (item:Items) => {
   const state = useSelector((state:RootState) => state.VideoSlice);
   const navigate = useNavigate();
   const params = useParams();
   console.log("item",item)


   const {videoId} = item?.id
   const {thumbnails,title,channelTitle,publishedAt} = item?.snippet

   const date = useMemo(() => {
      if(!publishedAt) return;
      const day = dayjs(publishedAt).day();

      return day === 0 ? "오늘 업로드" : day === 1 ? "하루 전" : `${day}일 전`
   }, [publishedAt])


   const getRoutePage = useCallback(() => {
      navigate(`/video/${videoId}`,{state:videoId})
   },[navigate,videoId]);

   return (
      <div className={style.container} onClick={getRoutePage}>
         <div className={style.image_box}>
            <img src={thumbnails?.medium.url} alt="img"/>
         </div>

         <div className={style.box}>
            <h1>{title}</h1>
            <h3>{channelTitle}</h3>
            <h3>조회수 : <span className={style.date}>{date}</span></h3>
         </div>
      </div>
   )
}

export default Video
