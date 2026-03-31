import { v4 } from "uuid";
import SignIn from "@/pages/sign-in";
import HomePage from "@/pages/home";

export const authed_route = [
  {
    path: "/",
    element: <HomePage />,
    id: v4(),
  },
];

export const unauthed_route = [
  {
    path: "/",
    element: <SignIn />,
    id: v4(),
  },
];
