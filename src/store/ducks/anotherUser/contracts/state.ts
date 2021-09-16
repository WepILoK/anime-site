export interface IFriend {
    id: number
    avatar: string
    username: string
}

export interface IAnotherUserData {
    _id: string
    email: string
    userName: string
    createdAt: string
    token: string
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
}

export interface IAnotherUserState {
    status: Status
    anotherUser: IAnotherUserData | null
}