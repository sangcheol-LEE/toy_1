import {Thumbnails} from "./videoData";

export interface responseType {
   etag : string;
   items : newVideoType[]
   kind : string;
   pageInfo : {
      resultsPerPage : number;
      totalResults : number;
   }
}


export interface newVideoType {
   contentDetails : ContentDetails;
   id: string;
   kind : string;
   snippet : Snippet
   statistics : Statistics
}

interface ContentDetails {
   caption : string;
   contentRating:object;
   definition:string;
   dimension:string;
   duration: string;
   licensedContent: boolean;
   projection:string;
}

interface Snippet {
   categoryId: string;
   channelId:string;
   channelTitle:string;
   defaultAudioLanguage:string;
   defaultLanguage:string;
   description:string;
   liveBroadcastContent:string;
   localized : {
      description:string;
      title:string;
   };
   publishedAt:string;
   tags:string[];
   thumbnails : {
      default: Thumbnails;
      high: Thumbnails;
      maxres : Thumbnails;
      medium: Thumbnails;
      standard: Thumbnails;
   }
   title : string;
}

interface Statistics {
   commentCount :  string;
   favoriteCount : string;
   likeCount :string;
   viewCount : string;
}