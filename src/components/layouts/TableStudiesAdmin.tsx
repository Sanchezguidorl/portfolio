import { Table } from "react-bootstrap"
import img1 from "../../assets/images/foto-card.png";

function TableStudiesAdmin() {
    return (
        <Table responsive striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Nombre del curso</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={img1} className="td-img-table-projects" alt="" /></td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      )
}

export default TableStudiesAdmin
