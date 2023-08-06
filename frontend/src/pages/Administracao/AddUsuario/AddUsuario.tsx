import CampoTexto from '../../../components/CampoTexto/CampoTexto';
import { FormControl, HStack } from '@chakra-ui/react';
import Botao from './../../../components/Botao/Botao';

const AddUsuario = () => {
  return (
    <div>
      <FormControl>
        <CampoTexto textoPadrao={'Digite seu nome completo'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Nome Completo:'} />
        <CampoTexto textoPadrao={'Digite seu email'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Email:'} tipo="email" />
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite seu CPF'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'CPF:'} />
          <CampoTexto textoPadrao={'Digite sua data de nascimento'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Data Nascimento:'} tipo={'date'} />
        </HStack>
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite seu telefone'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Telefone:'} />
          <CampoTexto textoPadrao={'Digite seu CEP'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'CEP:'} />
        </HStack>
        <CampoTexto textoPadrao={'Digite seu endereço'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Endereço:'} />
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite o Complemento'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Complemento:'} />
          <CampoTexto textoPadrao={'Digite o Bairro'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Bairro:'} />
        </HStack>
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite o Cidade'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Cidade:'} />
          <CampoTexto textoPadrao={'Digite o UF'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'UF:'} />
        </HStack>
        <CampoTexto textoPadrao={'Insira sua foto'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Foto:'} tipo="file" />
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite sua senha'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Senha:'} tipo="password" />
          <CampoTexto textoPadrao={'Confirmar senha'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Confirmar Senha:'} tipo="password" />
        </HStack>

        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <Botao textoBotao={'Salvar'} color={'green'} size="md" alinhamento="center"></Botao>
          <Botao textoBotao={'Cancelar'} color={'orange'} size="md" alinhamento="center"></Botao>
        </HStack>
      </FormControl>
    </div>
  );
};

export default AddUsuario;

import CampoTexto from '../../../components/CampoTexto/CampoTexto';
import { FormControl, HStack } from '@chakra-ui/react';
import Botao from './../../../components/Botao/Botao';
import { iModal } from '../../../interfaces/iModal';

const AddUsuario = ({user}: iModal) => {
 

  return (
    <div>
      <FormControl>
        <CampoTexto textoPadrao={'Digite seu nome completo'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Nome Completo:'} id='nome' value={user?.nomeCompleto} />
        <CampoTexto textoPadrao={'Digite seu email'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Email:'} tipo="email" id='email' value={user?.email}/>
        
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'} >
          <CampoTexto textoPadrao={'Digite seu CPF'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'CPF:'} id='cpf' value={user?.cpf}/>
          <CampoTexto textoPadrao={'Digite sua data de nascimento'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Data Nascimento:'} tipo={'date'} id='data'/>
        </HStack>
        
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'} >
          <CampoTexto textoPadrao={'Digite seu telefone'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Telefone:'} id='telefone' value={user?.telefone}/>
          <CampoTexto textoPadrao={'Digite seu CEP'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'CEP:'} id='cep' value={user?.cep}/>
        </HStack>
        
        <CampoTexto textoPadrao={'Digite seu endereço'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Endereço:'} id='endereco'  value={user?.endereco}/>
        
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'} >
          <CampoTexto textoPadrao={'Digite o Complemento'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Complemento:'} id='complemento' value={user?.complemento}/>
          <CampoTexto textoPadrao={'Digite o Bairro'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Bairro:'} id='bairro' value={user?.bairro}/>
        </HStack>
        
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite o Cidade'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Cidade:'} id='cidade' value={user?.cidade}/>
          <CampoTexto textoPadrao={'Digite o UF'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'UF:'} id='uf' value={user?.uf}/>
        </HStack>
        <CampoTexto textoPadrao={'Insira sua foto'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Foto:'} tipo="file" id='foto' />
        <CampoTexto textoPadrao={'Insira sua foto'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Foto:'} id='blocked' value={user?.blocked}/>
        
        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <CampoTexto textoPadrao={'Digite sua senha'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Senha:'} tipo="password" id='senha' />
          <CampoTexto textoPadrao={'Confirmar senha'} formatacao={'flushed'} tamanho={'ms'} textoLabel={'Confirmar Senha:'} tipo="password" id='confirmarSenha'/>
        </HStack>

        <HStack spacing={'0.5px'} align={'center'} marginTop={'15px'} display={'flex'} justifyContent={'center'}>
          <Botao textoBotao={'Salvar'} color={'green'} size="md" alinhamento="center"></Botao>
          <Botao textoBotao={'Cancelar'} color={'orange'} size="md" alinhamento="center"></Botao>
        </HStack>

      </FormControl>
    </div>
  );
};

export default AddUsuario;
