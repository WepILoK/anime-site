import {axios} from "../core/axios";
import {RegisterFormProps} from "../pages/Authorization/components/Register";
import {LoginFormProps} from "../pages/Authorization/components/Login";
import {IUserState} from "../store/ducks/user/contracts/state";

export interface UserApiResponse<D> {
    status: string
    message?: string
    data: D
}

const baseURL = "https://backend-anime-site.herokuapp.com"

export const UserApi = {
    async signIn(postData: LoginFormProps) {
        const data = await axios.post<UserApiResponse<IUserState['user']>>(baseURL + '/login', postData)
        return data
    },
    async signUp(postData: RegisterFormProps) {
        const {data} = await axios.post<UserApiResponse<any>>(baseURL + '/registration', postData)
        return data.message
    },
    async getMe() {
        const data = await axios.get(baseURL + '/users/me')
        return data
    },

}