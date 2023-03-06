import React from 'react'
import style from "./VideoDetail.module.scss";
import { useQuery } from 'react-query';
import { getVideoList } from '../../utils/common';
import { SERVER_QUERY,MOCK_QUERY } from '../../utils/urls';
import {useSelector} from "react-redux";
import { RootState } from '../../app/store';
import Video from '../../components/video/Video';
import { Items } from '../../types/videoData';
const VideoDetail = () => {
   const state = useSelector((state:RootState) => state.VideoSlice);
   const Mock = true ? MOCK_QUERY() : SERVER_QUERY(state.search_text)
   const {isLoading, isError, data:VideoList} = useQuery({ queryKey: ['search'], queryFn: () => getVideoList(Mock)})

   if(isLoading) return <div>isLoading...</div>;
   if(isError) return <div>{isError}</div>;

   console.log()

   return (
      <div className={style.container}>
         {
            VideoList?.items?.map((item:Items, idx:number) => {
               return (
                  <Video key={idx} {...item}/>
               )
            })
         }
      </div>
   )
}

export default VideoDetail
