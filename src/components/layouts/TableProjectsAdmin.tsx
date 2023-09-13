import { Table } from "react-bootstrap"
import img1 from '../../assets/images/foto-card.png';
function TableProjectsAdmin() {

  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre de Proyecto</th>
          <th>Descripción</th>
          <th>Url</th>
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

export default TableProjectsAdmin;
