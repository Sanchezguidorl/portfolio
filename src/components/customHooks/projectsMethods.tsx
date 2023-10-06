import axios, { AxiosResponse } from "axios";
const DB= "http://localhost:5000";

export interface ProjectI {
    _id: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    url: string;
  }
export interface ProjectSaveI {
    nombre: string;
    descripcion: string;
    imagen: string;
    url: string;
  }

export interface dataProjects{
  success: boolean, data: ProjectI[] | [] | ProjectI
}  
export const getProjects=async(): Promise<dataProjects>=>{
    try {
        const projectsData:AxiosResponse<dataProjects>= await axios.get(`${DB}/projects`);
        return projectsData.data;
      } catch (error) {
        throw new Error();
      }
};
export const getProjectById=async(id:string): Promise<dataProjects>=>{
    try {
        const projectData:AxiosResponse<dataProjects>= await axios.get(`${DB}/projects/${id}`);
        return projectData.data;
      } catch (error) {
        throw new Error();
      }
};

export const updateProject = async (project: ProjectI): Promise<dataProjects> => {
  try {
    const projectData: AxiosResponse<dataProjects> = await axios.put(`${DB}/projects/update/${project._id}`, project);
    return projectData.data;
  } catch (error) {
    throw new Error();
  }
};

export const createProject = async (project: ProjectSaveI): Promise<dataProjects > => {
  try {
    const projectData: AxiosResponse<dataProjects> = await axios.post(`${DB}/projects/create`, project);
    return projectData.data;
  } catch (error) {
    throw new Error();
  }
};

export const deleteProject = async (id: string): Promise<dataProjects> => {
  try {
    const projectData: AxiosResponse<dataProjects> = await axios.delete(`${DB}/projects/delete/${id}`);
    return projectData.data;
  } catch (error) {
    throw new Error();
  }
};

