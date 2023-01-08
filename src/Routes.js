import { createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Home from "../src/components/Home";
import Photo from "../src/components/Photo";
import Resale from "../src/components/Resale"
import Deep from "./components/Deep";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/projects/resale-planet",
        element: <Resale></Resale>,
      },
      {
        path: "/projects/photo-hunters",
        element: <Photo></Photo>
      },
      {
        path: "/projects/deep-web",
        element: <Deep></Deep>
      },
      
    ],
  },
]);
