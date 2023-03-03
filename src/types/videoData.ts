export interface VideoListType {
   kind : string;
   etag : string;
   nextPageToken : string;
   regionCode: string;
   pageInfo: PageInfo;
   items : Items[];
}


interface PageInfo {
   totalResults: number;
   resultsPerPage: number;
}

export interface Items {
   kind: string;
   etag: string;
   id: {
      kind: string;
      videoId : string;
   },
   snippet : Sniffet
}

interface Sniffet {
   publishedAt: string;
   channelId: string;
   title: string;
   description: string;
   thumbnails : Thumbnail;
   channelTitle: string;
   liveBroadcastContent: string;
   publishTime: string;
}

interface Thumbnail {
   default : Thumbnails;
   medium : Thumbnails;
   high : Thumbnails;
}

export interface Thumbnails {
   url: string;
   width: number;
   height: number;
}

