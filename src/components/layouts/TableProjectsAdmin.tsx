import { Table } from "react-bootstrap"
import { useEffect, useState } from "react";
import { ProjectI, dataProjects, deleteProject, getProjects } from "../customHooks/projectsMethods";
import { Link } from 'react-router-dom';
function TableProjectsAdmin() {
const [loading, setLoading]= useState<boolean>(true);
const [projects, setProjects]= useState<ProjectI[]|[]>();
const [errors, setErrors]= useState<string>('');

const fetchProjects= async()=>{
  try {
  const projectsData: dataProjects= await getProjects();
  if(projectsData.success){
    const data = Array.isArray(projectsData.data) ? projectsData.data : [];
    setProjects(data);
    setLoading(false);
  }
} catch (error) {
  setErrors("Error al conseguir los datos de proyectos");
}
};

useEffect(()=>{
  fetchProjects();
},[]);

const handleDelete=async(id:string)=>{
  setLoading(true);
try {
  const projectDeleted= await deleteProject(id);
if(projectDeleted){
  fetchProjects();
}
} catch (error) {
  setErrors("No fue posible eliminar el proyecto indicado");
}
};


  return (errors ?
    <div className="error-add fs-2 justify-content-center d-flex align-items-center text-center">{errors}</div>
    :
    loading ?
    <div className="loadingSection w-100">
    <div className="loader"></div>
        </div>
        :
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
{projects&& 
projects.map((project)=>
<tr key={project._id}>
  <td><img src={project.imagen} className="td-img-table-projects" alt={project.nombre}/></td>
  <td>{project.nombre}</td>
  <td>{project.descripcion}</td>
  <td>{project.url}</td>
  <td>
<button onClick={()=>handleDelete(project._id)}>x</button>
<Link to={`/form/projects/update/${project._id}`}>
<button>edit</button>
</Link>  
  </td>
</tr>
)}
<Link to={"/form/projects/create"}><button>create</button></Link>
</tbody>
    </Table>
  )
}

export default TableProjectsAdmin;
