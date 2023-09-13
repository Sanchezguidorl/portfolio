import { Container } from "react-bootstrap";
import TableProjectsAdmin from '../layouts/TableProjectsAdmin';

function ProjectsAdmin() {
  return (
    <Container id="ProjectsAdmin">
      <h1 className="text-cyanLight text-center mt-4 mb-3">Lista de Proyectos</h1>
      <section className="border border-cyanLight px-3 py-5">
<TableProjectsAdmin/>
      </section>
    </Container>
  );
}

export default ProjectsAdmin;
