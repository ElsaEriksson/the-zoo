import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./Layout";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { AnimalDetails } from "./pages/AnimalDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
        index: true,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal/:animalId",
        element: <AnimalDetails />,
      },
    ],
  },
]);
