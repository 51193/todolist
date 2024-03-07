import "./App.css";

import { route } from "./route";
import { useRoutes } from "react-router-dom";

function App() {
  const elements = useRoutes(route);
  return elements;
}

export default App;
