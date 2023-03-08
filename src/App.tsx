import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts';
import { RoutesApp } from './Routes';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
