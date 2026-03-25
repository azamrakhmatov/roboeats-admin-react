
// import Home from "@/pages/home";

import SignIn from "@/pages/sign-in";
import { v4 } from "uuid";

// authed_route
export const authed_route = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   id: v4()
  // },
 
]; 

// unauthed_route 
export const unauthed_route = [
  // {
  //   path: "/",
  //   element: <Home />,
  //   id: v4() 
  // },
  {
    path: "/",
    element: <SignIn />,
    id: v4()
  },
  
];
