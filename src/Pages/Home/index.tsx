import * as React from 'react';
import { useAuth } from '../../contexts/UseAuth';
import * as C from './style'

export default function Home () {

  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <C.Container>
      <C.Article>
        <C.H1>Pagina Home</C.H1>
        <C.LogoutButton onClick={handleLogout}>Sair</C.LogoutButton>
      </C.Article>
    </C.Container>
  );
}
