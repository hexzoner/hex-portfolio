import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import ProjectDetails from "./Components/ProjectDetails";
import MainLayout from "./Layout/MainLayout";
import NotFound from "./Components/NotFound.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="project/:id" element={<ProjectDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
