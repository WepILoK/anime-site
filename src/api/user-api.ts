import axios from "axios";

export const UserApi = {
    async signIn(postData: {email: string, password: string}) {
        const {data} = await axios.get(`/users?email=${postData.email}&password=${postData.password}`)
        return data
    },
    async getMe() {
        const {data} = await axios.get(`/users/?token=${window.localStorage.getItem('token')}`)
        return data
    },
}