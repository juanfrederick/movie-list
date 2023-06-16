import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import MoviePage from "./pages/movie";

function App() {
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <MoviePage />,
    },
  ]);

  return route;
}

export default App;
