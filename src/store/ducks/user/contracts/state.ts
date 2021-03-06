export interface INotification {
    id: number
    avatar: string
    name: string
    series: number
    translationTeam: string
    addedAt: string
}

export interface IChat {
    id: string
    userName: string
    avatar: string
    messages: {
        id: string
        message: string
    }[]
}

export interface IFriend {
    id: number
    avatar: string
    username: string
}

export interface IUserData {
    _id: string
    email: string
    userName: string
    createdAt: string
    notifications: INotification[]
    token: string
    chats: IChat[]
    friends: IFriend[]
    avatar?: string
    name?: string
    surname?: string
    age?: number
    country?: string
    city?: string
    vk?: string
    facebook?: string
    twitter?: string
}

export enum Status {
    SUCCESS = 'SUCCESS',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
    SIGNUP_SUCCESS = 'SIGNUP_SUCCESS',
    SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
}

export interface IUserState {
    user: IUserData | null
    isAuth: boolean
    status: Status
    message: string | null
}