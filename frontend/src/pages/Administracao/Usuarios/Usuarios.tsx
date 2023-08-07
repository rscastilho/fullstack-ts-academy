import { useMemo, useState } from 'react';
import UsuariosApi from '../../../api/UsuariosApi';
import { Link, Navigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { Authcontext } from '../../../Context/Context';
import ModalRef from './../../../components/Modal/Modal';
import AddUsuario from '../AddUsuario/AddUsuario';
import { iUser } from '../../../interfaces/iUser';
import AltertRef from '../../../components/Alert/Altert';
// type modalState = boolean;
// type setModalState = React.Dispatch<React.SetStateAction<modalState>>;

const Usuarios = () => {
  const [user, setUser] = useState<iUser[]>();
  const [registros, setRegistros] = useState();
  const { state } = useContext(Authcontext);
  const { onOpen, isOpen, onClose } = useDisclosure();

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
          <Table variant="striped" colorScheme="facebook" size={'sm'}>
            <TableCaption> {registros && `${registros} registros encontrados`} </TableCaption>
            <Thead>
              <Tr>
                <Th textAlign={'center'}>Nome Completo</Th>
                <Th textAlign={'center'}>CPF</Th>
                <Th textAlign={'center'}>Bloqueado</Th>
                <Th textAlign={'center'}>Nome Completo</Th>
                <Th textAlign={'center'}>CPF</Th>
                <Th textAlign={'center'}>Bloqueado</Th>
              </Tr>
            </Thead>
            <Tbody>
              {user?.map((userList: iUser, i: number) => (
                <tr key={i}>
                  <Td>{userList.nomeCompleto}</Td>
                  <Td textAlign={'center'}>{userList.cpf}</Td>
                  <Td textAlign={'center'}>{userList.blocked ? 'Sim' : 'Não'}</Td>
                  <Td textAlign={'right'}>
                    {/* <Botao color={'teal'} size={'sm'} textoBotao={'Editar'} funcao={onOpen} alinhamento={'end'} id={userList.id} /> */}
                    <ModalRef titulo={'Atualizar usuário'} isOp={isOpen} onClose={onClose} nomeCompleto={userList.nomeCompleto} user={userList}>
                      {/* <AddUsuario/> */}
                    </ModalRef>
                  </Td>
                  <Td textAlign={'left'}>
                    <AltertRef nomeCompleto={userList.nomeCompleto}/>
                  </Td>
                </tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th> </Th>
                <Th></Th>
                <Th> -- Paginação -- </Th>
                <Th></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      ) : (
        <>
        <Navigate to={'/'} />
        <Navigate to={'/'} />
        </>

        // <p>Usuário não logado no sistema</p>
      )}
      
      {/* <Link to={'/administracao'}> */}
      <Link to={'/administracao'}>
        <button>Voltar</button>
      </Link>
      

      {/* <ModalRef titulo={'Cadastrar novo usuário'} isOp={isOpen} onCl={onClose}>
        <AddUsuario/>
      </ModalRef> */}
    </div>
  );
};

export default Usuarios;
