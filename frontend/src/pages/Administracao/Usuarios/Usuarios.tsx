import { useMemo, useState } from 'react';
import UsuariosApi from '../../../api/UsuariosApi';
import { iRegister } from '../../../interfaces/iRegister';
import { Link, Navigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { Authcontext } from '../../../Context/Context';
import Botao from './../../../components/Botao/Botao';
import ModalRef from './../../../components/Modal/Modal';
import AddUsuario from '../AddUsuario/AddUsuario';

const Usuarios = () => {
  const [user, setUser] = useState<iRegister[]>();
  const [registros, setRegistros] = useState();
  const { state } = useContext(Authcontext);
  const { onOpen, isOpen, onClose} = useDisclosure()

  const getAllUser = async () => {
    try {
      const result = await UsuariosApi();
      setRegistros(result.registros);
      setUser(result.data);
    } catch (error) {
      console.log(error);

      return error;
    }
  };

  useMemo(() => {
    getAllUser();
  }, []);


  return (
    <div>
      {user || state ? (
        <TableContainer>
          <Botao color={'whatsapp'} size={'sm'} textoBotao={'Novo usuário'} funcao={onOpen}  alinhamento={'end'}/>
          <Table variant="striped" colorScheme="facebook" size={'sm'}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th textAlign={'center'}>Nome Completo</Th>
                <Th textAlign={'center'}>CPF</Th>
                <Th textAlign={'center'}>Bloqueado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user?.map((userList: iRegister, i: number) => (
                <tr key={i}>
                  <Td>{userList.nomeCompleto}</Td>
                  <Td>{userList.cpf}</Td>
                  <Td>{userList.blocked ? 'Sim' : 'Não'}</Td>
                  <td>
                    <button>Editar</button>
                  </td>
                  <td>
                    <button>Excluir</button>
                  </td>
                </tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th isNumeric> {registros} Encontrados</Th>
                <Th isNumeric></Th>
                <Th> -- Paginação -- </Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      ) : (
        <Navigate to={'/'} />

        // <p>Usuário não logado no sistema</p>
      )}
      <Link to={'/administracao'}>
        <button>Voltar</button>
      </Link>

      <ModalRef titulo={'Cadastrar novo usuário'} isOp={isOpen} onCl={onClose}>
        <AddUsuario/>
      </ModalRef>
    </div>
  );
};

export default Usuarios;
