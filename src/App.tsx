import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoute";

function App() {
  return (
    <>
      <BrowserRouter>{mainRoutes()}</BrowserRouter>
    </>
  );
}

export default App;
