import React,{useCallback,useMemo} from 'react'
import style from "./Video.module.scss";
import { useNavigate } from 'react-router';
import { Items } from '../../types/videoData';
import Axios,{AxiosResponse} from "axios";
import { useQuery } from 'react-query';
import { responseType } from '../../types/newVideo';
import { ReactNode } from 'react';
import dayjs from 'dayjs'

const Video:React.FC<Items> = (item:Items) => {
   const navigate = useNavigate();
   const getVideoDetail = useCallback(async() => {
      try {
         const response = await Axios.get<responseType>(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${item.id.videoId}&key=AIzaSyCE8pax84U8_T0MUPA6qjGDt9azc_yQ0JE`)
         .then((res:AxiosResponse) => res.data)
         return response
      }catch(e) {
         console.log(e)
      }
   },[item]);

   const {data:VideoList} = useQuery({ queryKey: ['videoDetail'], queryFn: getVideoDetail })

   const newVideoList:ReactNode = useMemo(()=> {
      if(VideoList?.items[0]) {
         return VideoList?.items[0].statistics.viewCount
      }
   },[VideoList]);


   const {thumbnails,title,channelTitle,publishedAt} = item?.snippet

   const date = useMemo(() => {
      if(!publishedAt) return;
      const day = dayjs(publishedAt).day();

      return day === 0 ? "오늘 업로드" : day === 1 ? "하루 전" : `${day}일 전`
   }, [publishedAt])


   return (
      <div className={style.container} onClick={() => {}}>
         <div className={style.image_box}>
            <img src={thumbnails?.medium.url} alt="img"/>
         </div>

         <div className={style.box}>
            <h1>{title}</h1>
            <h3>{channelTitle}</h3>
            <h3>조회 수 {newVideoList} <span className={style.date}>{date}</span></h3>
         </div>
      </div>
   )
}

export default Video
