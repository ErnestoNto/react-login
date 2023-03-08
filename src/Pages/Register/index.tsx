import React, { FormEvent} from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/UseAuth';
import * as C from '../Login/style'

export default function Register () {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [error, setError] = React.useState<string>('')

  const auth = useAuth()

  const handleRegister = (e:FormEvent) => {
    e.preventDefault()

    const register = auth.register(email, password)

    if(register!){
      return setError(register)
    }
    
    setEmail('')
    setPassword('')
  }  

  return (
    <C.FormContainer>
      <C.Form onSubmit={handleRegister}>
      <C.H1>Pagina Register</C.H1>
        <C.InputContainer>
          <C.Label>Email: </C.Label>
          <C.Input 
            type='text'
            placeholder='Digite seu email'
            value={email}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
        </C.InputContainer>
        <C.InputContainer>
          <C.Label>Senha: </C.Label>
          <C.Input 
            type='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </C.InputContainer>
        <C.ErrorSpan>{error}</C.ErrorSpan>
        <C.Button type='submit'>Registrar</C.Button>
        <C.Span>Já possui uma conta? <Link to='/'>Login</Link></C.Span>
      </C.Form>
    </C.FormContainer>
  );
}