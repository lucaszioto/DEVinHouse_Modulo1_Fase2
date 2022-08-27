import PropTypes from "prop-types";
import { useState } from "react";

import { SelecionadoContext } from "./selecionadoContext";

export const SelecionadoProvider = ({ children }) => {
  const [selecionados, setSelecionados] = useState([]);

  const isSelecionado = (id) => {
    return selecionados.some((item) => item === id);
  };

  const handleSelecionar = (produto) => {
    
      if (isSelecionado(produto.id)) {
      setSelecionados(selecionados.filter((item) => item !== produto.id));
      return;
    }
    setSelecionados([...selecionados, produto.id]);
  };

  return (
    <>
      <SelecionadoContext.Provider
        value={{ selecionados, handleSelecionar, isSelecionado }}
      >
        {children}
      </SelecionadoContext.Provider>
    </>
  );
};
SelecionadoProvider.propTypes = {
  children: PropTypes.node,
};