import React,{useEffect,useCallback,useMemo} from 'react'
import style from "./Home.module.scss";
import Axios,{AxiosResponse} from "axios";
import { useQuery, useMutation, useQueryClient} from "react-query";
import { Items, VideoListType } from '../../types/videoData';
import Video from '../../components/video/Video';


const Home = () => {
   const getVideoList = async() => {
      try {
         // const response = await Axios.get<VideoListType[]>(``)
         const response = await Axios.get<VideoListType[]>("../data/videoList.json")

         .then((res:AxiosResponse) => res.data)
         return response
      }catch(e) {
         console.log(e)
      }
   }
   const {isLoading, isError, data:VideoList} = useQuery({ queryKey: ['videos'], queryFn: getVideoList })

   if(isLoading) return <div>Loading...</div>
   if(isError) return <div>{isError}</div>

   return (
      <div className={style.container}>
         {
            VideoList.items.map((item:Items, idx:number) => {
               return (
                  <Video key={idx} {...item}/>
               )
            })
         }
      </div>
   )
}

export default Home

