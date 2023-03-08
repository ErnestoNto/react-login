import React, { createContext, useState, useEffect } from 'react'
import { IContext, IProvider, IUser } from './types'

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider = ({children}: IProvider) => {
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        const userList = JSON.parse(localStorage.getItem('userList')!)

        const userToken = JSON.parse(localStorage.getItem('user-token')!)

        if(userList && userToken){
            const hasUser = userList.filter((user:IUser) => user.email === userToken.email)
            if(hasUser) setUser(hasUser[0])
        }
    }, [])

    function login (email:string, password:string) {
        const userList = localStorage.getItem('userList')

        const hasUser = JSON.parse(userList!)?.filter((user: IUser) => user.email === email)

        if(hasUser[0]?.email){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.floor(Math.random() * 10000)
                const user = {email, token}
                localStorage.setItem('user-token', JSON.stringify(user))
                setUser(user)
            }else{
                return 'Email ou senha incorretos'
            }
        }else{
            return 'Usuário não existe'
        }
    }

    function register (email:string, password:string) {
        const userList = JSON.parse(localStorage.getItem('userList')!)
        
        const hasUser = userList?.filter((user:IUser) => user.email === email)

        if(hasUser?.length){
            return 'Usuário já cadastrado'
        }

        let newUser

        if(userList){
            newUser = [...userList, {email, password}]
        }else{
            newUser = [{email, password}]
        }

        localStorage.setItem('userList', JSON.stringify(newUser))
    }

    function logout () {
        setUser(null)
        localStorage.removeItem('user-token')
    }

    return (
        <AuthContext.Provider value={{...user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider