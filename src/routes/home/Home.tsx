import React from 'react'
import style from "./Home.module.scss";
import { useQuery, useMutation, useQueryClient} from "react-query";
import { Items } from '../../types/videoData';
import Video from '../../components/video/Video';
import { getVideoList } from '../../utils/common';
import { MOCKDATA,SERVER_QUERY } from '../../utils/urls';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
const Home = () => {
   const state = useSelector((state:RootState) => state.VideoSlice);
   const {isLoading, isError, data:VideoList} = useQuery({ queryKey: [state.search_text], queryFn: () => getVideoList(MOCKDATA)})

   if(isLoading) return <div>Loading...</div>
   if(isError) return <div>{isError}</div>

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

export default Home

