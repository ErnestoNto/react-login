import React, { FormEvent} from 'react';
import * as C from './style'
import { Link, useNavigate } from 'react-router-dom' 
import { useAuth } from '../../contexts/UseAuth';

export default function Login () {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  const [error, setError] = React.useState<string>('')

  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogin = (e:FormEvent) => {
    e.preventDefault()

    if(email === '' || password === ''){
      return setError('Preencha todos os campos')
    }

    const login = auth.login(email, password)

    if(login!){
      return setError(login)
    }
    
    navigate('/home')
  }  

  return (
    <C.FormContainer>
      <C.Form onSubmit={handleLogin}>
      <C.H1>Pagina Login</C.H1>
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
        <C.Button type='submit'>Acessar</C.Button>
      <C.Span>Nao possui uma conta? <Link to='/register'>Registre-se</Link></C.Span>
      </C.Form>
    </C.FormContainer>
  );
}