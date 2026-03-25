import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import createStore from "react-auth-kit/createStore"; 
import AuthProvider from "react-auth-kit"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux"; 
import store from "./redux"; 
const auth_store = createStore({
  authName: "_auth",
  authType: "cookie",
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === "https:" 
});

const queryClient = new QueryClient(); // @tanstack/react-query; // react-query settings

createRoot(document.getElementById("root")!).render(
  <AuthProvider store={auth_store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </AuthProvider> 
);
