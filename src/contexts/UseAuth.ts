import { useContext } from 'react'
import { AuthContext } from '.'

export const useAuth = () => {
    const auth = useContext(AuthContext)

    return auth
}