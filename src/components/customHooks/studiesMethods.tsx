import { getFirestore, DocumentData } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

const db=getFirestore();
const studies= collection(db,'studies');

export interface Study {
    id: string;
    curso: string;
    institucion: string;
    estado: string;
    imagen: string;
  }

export const getStudies=async()=>{
    try {
        const querySnapshot = await getDocs(studies);
        const studiesData:Study[]= [];
    
        querySnapshot.forEach((doc) => {
            // Accede a los datos de cada documento
            const studyData: DocumentData = doc.data();
            const study: Study = {
                id: doc.id,
                curso: studyData.curso,
                institucion: studyData.institucion,
                estado: studyData.estado,
                imagen: studyData.imagen
              // Agrega otros campos según tu estructura de datos
            }
            studiesData.push(study);
        })
    return studiesData;
      } catch (error) {
        return false;
      }
};
