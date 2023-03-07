import React from 'react'
import style from "./VideoDetail.module.scss";
import { useQuery } from 'react-query';
import { getVideoList } from '../../utils/common';
import { SERVER_QUERY,MOCK_QUERY } from '../../utils/urls';
import {useSelector} from "react-redux";
import { RootState } from '../../app/store';
import Video from '../../components/video/Video';
import { Items } from '../../types/videoData';
import YouTube from 'react-youtube';
import { useLocation }from "react-router-dom";
interface Opts {
   height: string;
   width : string;
   playerVars : {
      autoplay: number
   }
}

const VideoDetail = () => {
   const {state} = useLocation()
   const opts:Opts = {
      width: '640',
      height: '390',
      playerVars: {
        autoplay: 1,
      },
    };
   return (
      <div>
         <YouTube videoId={state} opts={opts} />;
      </div>
   )
}

export default VideoDetail
