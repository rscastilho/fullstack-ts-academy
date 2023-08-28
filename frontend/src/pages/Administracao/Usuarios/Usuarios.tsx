import { useMemo, useState } from 'react';
import UsuariosApi from '../../../api/UsuariosApi';
import { Link, Navigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, useDisclosure } from '@chakra-ui/react';
import { useContext } from 'react';
import { Authcontext } from '../../../Context/Context';
import ModalRef from './../../../components/Modal/Modal';
import { iUser } from '../../../interfaces/iUser';
import AltertRef from '../../../components/Alert/Altert';
// type modalState = boolean;
// type setModalState = React.Dispatch<React.SetStateAction<modalState>>;

const Usuarios = () => {
  const [user, setUser] = useState<iUser[]>();
  const [registros, setRegistros] = useState();
  const { state } = useContext(Authcontext);
  const { isOpen, onClose } = useDisclosure();

  const getAllUser = async () => {
    try {
      const result = await UsuariosApi.getAllUsers();
      setRegistros(result.registros);
      setUser(result.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  
  useMemo(() => {
    console.log(user)
    getAllUser();
  }, []);

  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      {user || state ? (
        <TableContainer>
          <Table variant="striped" colorScheme="facebook" size={'sm'} width={'70%'}>
            <TableCaption> {registros && `${registros} registros encontrados`} </TableCaption>
            <Thead>
              <Tr>
                <Th textAlign={'center'}>Nome Completo</Th>
                <Th textAlign={'center'}>CPF</Th>
                <Th textAlign={'center'}>Bloqueado</Th>
                <Th textAlign={'center'}>Deletado</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {user?.map((userList: iUser, i: number) => (
                <tr key={i}>
                  <Td>{userList.nomeCompleto}</Td>
                  <Td textAlign={'center'}>{userList.cpf}</Td>
                  <Td textAlign={'center'}>{userList.blocked ? 'Sim' : 'Não'}</Td>
                  <Td textAlign={'center'}>{userList.deleted ? 'Sim' : 'Não'}</Td>
                  
                  <Td textAlign={'right'}>
                    {/* <Botao color={'teal'} size={'sm'} textoBotao={'Editar'} funcao={onOpen} alinhamento={'end'} id={userList.id} /> */}
                    <ModalRef titulo={'Atualizar usuário'} isOp={isOpen} onClose={onClose} nomeCompleto={userList.nomeCompleto} user={userList} />
                  </Td>
                  <Td textAlign={'left'}>
                    <AltertRef nomeCompleto={userList.nomeCompleto} id={userList.id} />
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
      )}
      <Link to={'/administracao'}>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Usuarios;
