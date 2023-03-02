import React from 'react';
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import Root from './routes/root/Root';
import Home from './routes/home/Home';
import NotFound from './components/NotFound';
import VideoDetail from './routes/videoDetail/VideoDetail';
const router = createBrowserRouter([
  {
    path : "/",
    element: <Root />,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <Home />},
      {path: "/video/:videoId", element: <VideoDetail />}
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
