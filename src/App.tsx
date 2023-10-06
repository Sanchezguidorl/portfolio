import "./firebase/config.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import "../styles/main.scss";
import Home from "./components/pages/Home";
import Footer from "./components/layouts/Footer";
import ProjectsAdmin from "./components/pages/ProjectsAdmin";
import StudiesAdmin from "./components/pages/StudiesAdmin";
import FormEditStudies from "./components/layouts/FormEditStudies";
import FormCreateStudies from "./components/layouts/FormCreateStudies.js";
import FormCreateProjects from "./components/layouts/FormCreateProjects.js";
import FormEditProjects from "./components/layouts/FormEditProjects.js";
import Login from "./components/pages/Login.js";
import Guadian from "./components/layouts/Guadian.js";

function App() {
  return (
    <>
      <div className="bg-dark">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={
                <Guadian>
                  <ProjectsAdmin />
                </Guadian>
              }
            />
            <Route
              path="/studies"
              element={
                <Guadian>
                  <StudiesAdmin />
                </Guadian>
              }
            />
            <Route
              path="/form/studies/:id"
              element={
                <Guadian>
                  <FormEditStudies />
                </Guadian>
              }
            />
            <Route
              path="/form/studies/create"
              element={
                <Guadian>
                  <FormCreateStudies />
                </Guadian>
              }
            />
            <Route
              path="/form/projects/create"
              element={
                <Guadian>
                  <FormCreateProjects />
                </Guadian>
              }
            />
            <Route
              path="/form/projects/update/:id"
              element={
                <Guadian>
                  <FormEditProjects />
                </Guadian>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
