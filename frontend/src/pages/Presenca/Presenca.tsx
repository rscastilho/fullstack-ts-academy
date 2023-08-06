import CampoTexto from './../../components/CampoTexto/CampoTexto';
import Botao from './../../components/Botao/Botao';
import React, { useState } from 'react';
import { PresencaApi } from '../../api/PresencaApi';
import { iPresenca } from '../../interfaces/iPresenca';

const Presenca = () => {
  const [numeroMatricula, setNumeroMatricula] = useState<number>();
  const datas = Date.now();
  const hoje = new Date(datas);
  const data: iPresenca = {
    data: hoje,
    numeroMatricula,
    modalidade: 1,
  };

  const handlePresenca = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const result = await PresencaApi(data);
      console.log(result);
      return result;
    } catch (error: any) {
      return error;
    }
  };

  return (
    <div>
      <CampoTexto
        formatacao="flushed"
        id="presenca"
        tamanho="ms"
        textoLabel="Número de  matrícula:"
        textoPadrao="Digite seu número de matrícula"
        tipo={'number'}
        onChange={(e: React.ChangeEvent<HTMLFormElement>) => setNumeroMatricula(e.target.value)}
      />
      {/* <input type='number' placeholder='teste' value={numeroMatricula}  onChange={(e)=> setNumeroMatricula(+e.target.value)}></input> */}
      <Botao textoBotao="Presente" color="facebook" size="md" alinhamento="center" funcao={handlePresenca} />
    </div>
  );
};

export default Presenca;
