export const MOCKDATA = "../data/videoList.json"
export const SERVER_DATA = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyCE8pax84U8_T0MUPA6qjGDt9azc_yQ0JE`

export const SERVER_QUERY = (query:string) => {
   return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=AIzaSyCE8pax84U8_T0MUPA6qjGDt9azc_yQ0JE`
}