import { FormLabel, Input } from '@chakra-ui/react';
import { iCampoTexto } from '../../interfaces/iCampoTexto';

const CampoTexto = ({ textoPadrao, tamanho, formatacao, tipo, textoLabel }: iCampoTexto) => {
  return (
    <>
      <FormLabel marginTop={'5px'}>{textoLabel}</FormLabel>
      <Input placeholder={textoPadrao} size={tamanho} type={tipo} variant={formatacao} marginBottom={'5px'} />
    </>
  );
};

export default CampoTexto;
