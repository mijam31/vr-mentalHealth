import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Text from "./pages/Text";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/text", element: <Text /> },
  ]);
  return (
    <>
      <div className="app">
        <div className="content">{routes}</div>
      </div>
    </>
  );
}

export default App;
