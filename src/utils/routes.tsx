
import SignIn from "@/pages/sign-in";
import { v4 } from "uuid";

// authed_route
export const authed_route = [
  {
    path: "/home",
    element: <div>홈 페이지입니다.</div>,
    id: v4()
  },
 
]; 

// unauthed_route 
export const unauthed_route = [
  {
    path: "/",
    element: <SignIn />,
    id: v4()
  },
  
];
