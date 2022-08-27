import { useState } from 'react';
import { useAutenticacao } from '../../context/autenticacao/useAutenticacao';
import { InfoUser } from '../InfoUser/InfoUser';

import styles from './Header.module.css';

export const Header = () => {
  const { isAutenticado, onLogin } = useAutenticacao();
  const [nomeUsuario, setNomeUsuario] = useState('');

  console.log(nomeUsuario);

  const fazLogin = () => {
    if (!nomeUsuario) {
      alert('Informe o nome');
      return;
    }

    onLogin(nomeUsuario);
    setNomeUsuario('');
  };

  return (
    <header className={styles.header}>
      {isAutenticado ? (
        <InfoUser />
      ) : (
        <div className={styles.container}>
          <input
            placeholder='Informe seu nome'
            value={nomeUsuario}
            onChange={(event) => setNomeUsuario(event.target.value)}
          />
          <button onClick={fazLogin}>Login</button>
        </div>
      )}
    </header>
  );
};
