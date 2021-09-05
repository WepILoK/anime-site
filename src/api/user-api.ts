import axios from "axios";
import {RegisterFormProps} from "../pages/Authorization/components/Register";

export const UserApi = {
    async signIn(postData: {email: string, password: string}) {
        const {data} = await axios.get(`/users?email=${postData.email}&password=${postData.password}`)
        return data
    },
    async signUp(postData: RegisterFormProps) {
        const {data} = await axios.post('https://backend-anime-site.herokuapp.com/registration', postData)
        return data
    },
    async getMe() {
        const {data} = await axios.get(`/users/?token=${window.localStorage.getItem('token')}`)
        return data
    },

}