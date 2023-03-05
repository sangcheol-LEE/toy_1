import React,{useEffect,useCallback,useMemo} from 'react'
import style from "./Home.module.scss";
import Axios,{AxiosResponse} from "axios";
import { useQuery, useMutation, useQueryClient} from "react-query";
import { Items, VideoListType } from '../../types/videoData';
import Video from '../../components/video/Video';
import { getVideoList } from '../../utils/common';
import { MOCKDATA,SERVER_DATA } from '../../utils/urls';

const Home = () => {

   const {isLoading, isError, data:VideoList} = useQuery({ queryKey: ['videos'], queryFn: () => getVideoList(MOCKDATA)})

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

