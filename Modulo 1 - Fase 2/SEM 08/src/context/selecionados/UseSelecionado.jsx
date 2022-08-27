import { useContext } from "react";
import { SelecionadoContext } from "./SelecionadoContext";

export const useSelecionado = () => {
  const contexto = useContext(SelecionadoContext);
  return contexto;
};
