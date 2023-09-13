import { Container } from "react-bootstrap"
import TableStudiesAdmin from "../layouts/TableStudiesAdmin"

function StudiesAdmin() {
  return (
    <Container id="StudiesAdmin">
      <h1 className="text-cyanLight text-center mt-4 mb-3">Lista de cursos realizados</h1>
      <section className="border border-cyanLight px-3 py-5">
<TableStudiesAdmin/>
      </section>
    </Container>
  )
}

export default StudiesAdmin
