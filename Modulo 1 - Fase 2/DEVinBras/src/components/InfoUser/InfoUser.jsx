import { useAutenticacao } from '../../context/autenticacao/useAutenticacao';

import styles from './InfoUser.module.css';

export const InfoUser = () => {
  const { usuarioAutenticado, onLogout } = useAutenticacao();

  return (
    <div className={styles.container}>
      <p>Olá {usuarioAutenticado.nome}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
