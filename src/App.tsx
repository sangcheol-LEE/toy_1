import React from 'react';
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import Root from './routes/root/Root';
import Home from './routes/home/Home';
import NotFound from './components/NotFound';
import VideoDetail from './routes/videoDetail/VideoDetail';
import WatchDetail from './routes/watchDetail/WatchDetail';

const router = createBrowserRouter([
  {
    path : "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home />},
      {path: "video/:videoId", element: <VideoDetail />},
      {path: "result/:videoId", element: <WatchDetail />},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
