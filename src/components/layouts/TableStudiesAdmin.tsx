import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Study, dataStudy, getStudies } from "../customHooks/studiesMethods";
import { Link } from "react-router-dom";
import { deleteStudy } from "./../customHooks/studiesMethods";

function TableStudiesAdmin() {
  const [studies, setStudies] = useState<Study[]|[]>();
  const [errors, setErrors] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();

  const fetchData = async()=>{
    setLoading(true);
    try {
      const studies: dataStudy = await getStudies();
      if (studies.success) {
        const data = Array.isArray(studies.data) ? studies.data : [];
        setStudies(data);
        setLoading(false);
      }
    } catch (error) {
      setErrors("Error al traer los datos de estudios realizados");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteStudyById = async (id: string) => {
    try {
      const studyDeleted = await deleteStudy(id);
      if (studyDeleted.success) {
        fetchData();
      }
    } catch (error) {
      setErrors("Error al eliminar estudio");
    }
  };

  return loading ? (
    <div className="loadingSection w-100">
      <div className="loader"></div>
    </div>
  ) : (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Logo</th>
          <th>Nombre del curso</th>
          <th>Institucion</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {errors ? (
          <div></div>
        ) : (
          studies &&
          studies.map((study) => (
            <tr key={study._id}>
              <td>
                <img
                  src={study.logoInstitucion}
                  className="td-img-table-projects"
                  alt={study.nombre}
                />
              </td>
              <td>{study.nombre}</td>
              <td>{study.institucion}</td>
              <td>{study.estado}</td>
              <td>
                <Link to={""} onClick={() => deleteStudyById(study._id)}>
                  X
                </Link>
                <Link to={`/form/studies/${study._id}`}>editar</Link>
              </td>
            </tr>
          ))
        )}
      </tbody>
      <Link to={"/form/studies/create"}>creat</Link>
    </Table>
  );
}

export default TableStudiesAdmin;
