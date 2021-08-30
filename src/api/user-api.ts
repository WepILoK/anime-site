import axios from "axios";

export const UserApi = {
    async signIn(postData: {email: string, password: string}) {
        const {data} = await axios.get(`/users?email=${postData.email}&password=${postData.password}`)
        return data[0]
    },
}