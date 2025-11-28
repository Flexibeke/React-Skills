import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // instalado pela Biblioteca react-router-dom@6.26.1

const router = createBrowserRouter([
  {
    path: "/", //Para a página inicial / é obrigatório, por que a web defini isso,
    // caso eu querer mudar eu terei que acessar localHost... /o nome que eu quiser
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/*Aqui é aonde aparece a rota que defini em element*/}
  </StrictMode>
);
