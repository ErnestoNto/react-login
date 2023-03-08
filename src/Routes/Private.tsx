import { useAuth } from "../contexts/UseAuth";
import Login from "../Pages/Login";

export function Private ({children}: {children: JSX.Element}) {
    const { email } = useAuth() 

        if(!email){
            return <Login />
        }

        return children
}