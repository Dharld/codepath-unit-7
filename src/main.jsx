import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes";

// components
import Home from "./components/Home/home.component.jsx";
import ListCrewMate from "./components/ListCrewMate/list-crewmate.component.jsx";
import CrewMate from "./components/CrewMate/crewmate.component.jsx";
import CreateCrewMate from "./components/CreateCrewMate/create-crewmate.component.jsx";
import { ToasterProvider } from "./context/toaster.context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/crew-mate",
        element: <ListCrewMate />,
      },
      {
        path: "/crew-mate/:id",
        element: <CrewMate />,
        children: [
          {
            path: "/crew-mate/:id/edit",
            element: <CreateCrewMate />,
          },
        ],
      },
      {
        path: "/create",
        element: <CreateCrewMate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme hasBackground={false}>
      <ToasterProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ToasterProvider>
    </Theme>
  </React.StrictMode>
);
