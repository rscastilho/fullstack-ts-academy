import { FormLabel, Input } from '@chakra-ui/react';
import { iCampoTexto } from '../../interfaces/iCampoTexto';

const CampoTexto = ({ textoPadrao, tamanho, formatacao, tipo, textoLabel, id, value, onChange}: iCampoTexto) => {
  return (
    <>
      <FormLabel marginTop={'5px'}>{textoLabel}</FormLabel>
      <Input placeholder={textoPadrao} size={tamanho} type={tipo} variant={formatacao} marginBottom={'5px'}  id={id} value={value} onChange={onChange}/>
    </>
  );
};

export default CampoTexto;
