import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/pages/Login/Login";
import Home from "./components/layouts/pages/Home/Home"
import Register from "./components/layouts/pages/Register/Register";
import RegisterProduct from "./components/layouts/pages/RegiterProduct/RegisterProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path:"/manga",
    element:<RegisterProduct/>
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
