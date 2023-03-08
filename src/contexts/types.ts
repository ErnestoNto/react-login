export interface IUser {
    email?: string
    password?: number
    token?: number
}

export interface IContext extends IUser{
    login: (email: string, password: string) => void
    register: (email: string, password: string) => void
    logout: () => void
}

export interface IProvider {
    children: JSX.Element
}