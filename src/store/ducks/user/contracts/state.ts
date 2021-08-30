export interface INotification {
    id: number
    avatar: string
    name: string
    series: number
    translationTeam: string
    addedAt: string
}

export interface IChat {
    id: number
    userName: string
    avatar: string
    messages: {
        id: number
        message: string
    }[]
}

export interface IFriend {
    id: number
    avatar: string
    username: string
}

export interface IUserData {
    id: number
    email: string
    userName: string
    password: string
    createdAt: string
    name?: string
    surname?: string
    age?: number
    country?: string
    city?: string
    avatar?: string
    vk?: string
    facebook?: string
    twitter?: string
    notifications: INotification[]
    chats: IChat[]
    friends: IFriend[]
}

export enum Status {
    SUCCESS = 'SUCCESS',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface IUserState {
    user: IUserData[]
    isAuth: boolean
    status: Status
}