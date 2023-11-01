import axios from "axios";
const DB =  import.meta.env.VITE_REACT_APP_DB;
export interface UserI{
    user: string,
    password: string
}

export interface AuthDataWithToken{
    success: boolean,
    token: string
}

export const authUser= async(user:UserI): Promise<AuthDataWithToken>=>{
    try {
        const userAuth: AuthDataWithToken= await axios.post(`${DB}/login`, user);
        return userAuth.data;
    } catch (error) {
        throw new Error();
    }
}