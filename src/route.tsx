import { Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import Test from "./pages/test/test";
import Home from "./pages/home/home";

const route = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/home",
    element: <Home />,
  }
];

export { route };
