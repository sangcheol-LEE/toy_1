import Axios,{AxiosResponse} from "axios";
import { VideoListType } from "../types/videoData";


export const getVideoList = async(url: string) => {
   try {
      const response = await Axios.get<VideoListType[]>(url)
      .then((res:AxiosResponse) => res.data)
      return response
   }catch(e) {
      console.log(e)
   }
}

