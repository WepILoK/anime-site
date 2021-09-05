import axios from "axios";
import {RegisterFormProps} from "../pages/Authorization/components/Register";
import {LoginFormProps} from "../pages/Authorization/components/Login";

export interface UserApiResponse {
    status: string
    message?: { keyValue: { email: string } }
    data?: {email: string, userName: string}
}

export const UserApi = {
    async signIn(postData: LoginFormProps) {
        const {data} = await axios.get(`/users?email=${postData.email}&password=${postData.password}`)
        return data
    },
    async signUp(postData: RegisterFormProps) {
        const {data} = await axios.post<UserApiResponse>('https://backend-anime-site.herokuapp.com/registration', postData)
        return data
    },
    async getMe() {
        const {data} = await axios.get(`/users/?token=${window.localStorage.getItem('token')}`)
        return data
    },

}