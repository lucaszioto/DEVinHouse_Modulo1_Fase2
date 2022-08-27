import { useEffect } from 'react';
import { useState } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

const CHAVE_USUARIO = 'usuario';

export const AutenticacaoProvider = ({ children }) => {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const usuario = localStorage.getItem(CHAVE_USUARIO);

    if (usuario) {
      setUsuarioAutenticado(JSON.parse(usuario));
    }
  }, []);

  const handleLogin = (nome) => {
    const usuario = {
      id: new Date().getTime(),
      nome,
    };
    setUsuarioAutenticado(usuario);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuario));
  };

  const handleLogout = () => {
    setUsuarioAutenticado(null);
    localStorage.removeItem(CHAVE_USUARIO);
  };

  return (
    <AutenticacaoContext.Provider
      value={{
        usuarioAutenticado,
        isAutenticado: !!usuarioAutenticado,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AutenticacaoContext.Provider>
  );
};
