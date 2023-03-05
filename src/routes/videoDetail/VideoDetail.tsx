import React from 'react'
import style from "./VideoDetail.module.scss";
import { useQuery } from 'react-query';
import { getVideoList } from '../../utils/common';
import { SERVER_QUERY } from '../../utils/urls';
import {useSelector} from "react-redux";
import { RootState } from '../../app/store';
const VideoDetail = () => {
   const state = useSelector((state:RootState) => state.VideoSlice);
   const {isLoading, isError, data:VideoList} = useQuery({ queryKey: ['search'], queryFn: () => getVideoList(SERVER_QUERY(state.search_text))})


   console.log("rooood",VideoList)
   return (
      <div>
         VideoDetail
      </div>
   )
}

export default VideoDetail
