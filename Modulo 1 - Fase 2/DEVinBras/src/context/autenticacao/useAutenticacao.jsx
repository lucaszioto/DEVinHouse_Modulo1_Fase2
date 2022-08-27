import { useContext } from 'react';
import { AutenticacaoContext } from './AutenticacaoContext';

export const useAutenticacao = () => {
  const contexto = useContext(AutenticacaoContext);

  if (!contexto) {
    console.log('Sem provider');
  }

  return contexto;
};
