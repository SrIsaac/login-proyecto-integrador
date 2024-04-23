import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/layouts/pages/auth/Login";
import Home from "./components/layouts/pages/pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
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
