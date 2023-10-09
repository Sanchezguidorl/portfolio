import axios, { AxiosResponse } from "axios";
const DB = "http://localhost:5000";

const token= localStorage.getItem("token");
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${token}`
  },
});

export interface Study {
  _id: string;
  nombre: string;
  institucion: string;
  estado: string;
  logoInstitucion: string;
}

export interface StudySave {
  nombre: string;
  institucion: string;
  estado: string;
  logoInstitucion: string;
}

export interface dataStudy {
  success: boolean;
  data: Study[] | Study | null;
}
export const getStudies = async (): Promise<dataStudy> => {
  try {
    const studiesData: AxiosResponse<dataStudy> = await axios.get(
      `${DB}/studies`
    );
    return studiesData.data;
  } catch (error) {
    throw new Error();
  }
};
export const getStudiesById = async (id: string): Promise<dataStudy> => {
  try {
    const studyData: AxiosResponse<dataStudy> = await axiosInstance.get(
      `/studies/${id}`
    );
    return studyData.data;
  } catch (error) {
    throw new Error();
  }
};

export const updateStudy = async (study: Study): Promise<dataStudy> => {
  try {
    const studyData: AxiosResponse<dataStudy> = await axiosInstance.post(
      `/studies/update/${study._id}`,
      study
    );
    return studyData.data;
  } catch (error) {
    throw new Error();
  }
};

export const createStudy = async (study: StudySave): Promise<dataStudy> => {
  try {
    const studyData: AxiosResponse<dataStudy> = await axiosInstance.post(
      `/studies/create`,
      study
    );
    return studyData.data;
  } catch (error) {
    throw new Error();
  }
};

export const deleteStudy = async (id: string): Promise<dataStudy> => {
  try {
    const studyData: AxiosResponse<dataStudy> = await axiosInstance.delete(
      `/studies/delete/${id}`
    );
    return studyData.data;
  } catch (error) {
    throw new Error();
  }
};
