import React, { ReactNode } from "react";
import { BotaoEstilo } from "../styles";
interface Props {
  //   isEnable: boolean;
  mensagem: string;
  type: string;
  onClick?: () => void;
  children: ReactNode;
  disabled?: boolean;
}
export const Botao: React.FC<Props> = ({
  //   isEnable,
  mensagem,
  type,
  children,
  disabled,
  ...props
}) => {
  return (
    <BotaoEstilo disabled={disabled} {...props}>
      {children}
    </BotaoEstilo>
  );
};
export default Botao;
//   const buttonClassName = Enable ? className.enable : className.disable;
