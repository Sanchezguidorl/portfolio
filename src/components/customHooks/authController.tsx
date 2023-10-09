import axios from "axios";
const DB = "http://localhost:5000";
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
        return userAuth;
    } catch (error) {
        throw new Error();
    }
}