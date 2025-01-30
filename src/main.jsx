import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomeView from "./Views/HomeView";
import ErrorView from "./Views/ErrorView";
import BookView from "./Views/BookView";
import ResultView from "./Views/ResultView";
import { AppContext } from "./App";
import BookPageView from "./Views/BookPageView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomeView /> },
      { path: "/result/:search", element: <ResultView /> },
      { path: "book/:id", element: <BookPageView /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
