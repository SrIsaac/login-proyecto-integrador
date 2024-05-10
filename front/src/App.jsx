import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/pages/Login/Login";
import Home from "./components/layouts/pages/Home";
import Register from "./components/layouts/pages/Register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <section className="proyect">
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
