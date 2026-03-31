import { Route, Routes } from "react-router-dom";
import { authed_route, unauthed_route } from "./utils/routes";
import { Toaster } from "@/components/ui/sonner";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "./components/navbar";

const App = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="w-full">
      {isAuthenticated && <Navbar />}
      
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
