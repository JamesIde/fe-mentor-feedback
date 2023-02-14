import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddFeedback from "./pages/AddFeedback";
import { QueryClient, QueryClientProvider } from "react-query";
import Register from "./pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-feedback",
    element: <AddFeedback />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>
);
