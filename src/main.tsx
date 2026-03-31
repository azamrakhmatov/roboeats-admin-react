import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux"; 
import store from "./redux"; 


const queryClient = new QueryClient(); // @tanstack/react-query; // react-query settings

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ReactQueryDevtools initialIsOpen={false} />
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
);
