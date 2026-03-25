import { Route, Routes } from "react-router-dom";

import { authed_route, unauthed_route } from "./utils/routes";
import { Toaster } from "@/components/ui/sonner";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import Navbar from "./components/navbar";


const App = () => {
  const isAuthenticated = useIsAuthenticated();

  return (

    <div className="w-full"> 
    <Navbar/>
      <Toaster />
      <Routes>
        {(isAuthenticated ? authed_route : unauthed_route).map(
          (route, index) => {
            return <Route key={index} {...route} />;
          },
        )}
      </Routes>
    </div>
  );
};

export default App;
