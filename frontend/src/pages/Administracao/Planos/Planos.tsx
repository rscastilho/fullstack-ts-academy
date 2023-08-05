import { Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { Link, Navigate } from 'react-router-dom';
import { useContext, useMemo, useState } from 'react';
import { Authcontext } from '../../../Context/Context';
import PlanoApi from '../../../api/PlanoApi';
import { iPlano } from '../../../interfaces/iPlano';
import { changeCurrency } from '../../../Utils/utils';

const Planos = () => {
  const { state } = useContext(Authcontext);
  const [registros, setRegistros] = useState();
  const [planos, setPlanos] = useState<iPlano[]>();

  const getAllPlanos = async () => {
    try {
      const result = await PlanoApi();
      setRegistros(result.registros);
      setPlanos(result.data);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useMemo(() => {
    getAllPlanos();
  }, []);

  return (
    <div>
      {state ? (
        <TableContainer>
          <Table variant="striped" colorScheme="facebook" size={'sm'}>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <>
                  <Th>{'Descricao'}</Th>
                  <Th>{'Valor'}</Th>
                </>

                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {planos &&
                planos.map((planosList: iPlano, i: number) => (
                  <tr key={i}>
                    <Td>{planosList.descricao}</Td>
                    <Td>{changeCurrency(planosList.valor)}</Td>
                    <Td></Td>
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
    </div>
  );
};

export default Planos;
