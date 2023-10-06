import axios from "axios";
const DB = "http://localhost:5000";
export interface UserI{
    user: string,
    password: string
}

export interface AuthDataWithError{
    success: boolean,
    error: string
}

export interface AuthDataWithToken{
    success: boolean,
    token: string
}

export const authUser= async(user:UserI): Promise<AuthDataWithError|AuthDataWithToken>=>{
    try {
        const userAuth:AuthDataWithError | AuthDataWithToken= await axios.post(`${DB}/login`, user);
        return userAuth.data;
    } catch (error) {
        throw new Error();
    }
}