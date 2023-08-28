import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { iUser } from '../../interfaces/iUser';
import UsuariosApi from '../../api/UsuariosApi';
// import AddUsuario from '../../pages/Administracao/AddUsuario/AddUsuario';

const AltertRef = ({ nomeCompleto, id }: iUser) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  const handleDeleteUser = async () => {
    try {
      const result = await UsuariosApi.deleteUser(id!);
      console.log(result);
      console.log(id)
      return;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen} size={'sm'}>
        Deletar
      </Button>

      <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Deletar Usuário
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja deletar usuario {nomeCompleto}?{/* <AddUsuario/> */}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} size={'sm'}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDeleteUser} ml={3} size={'sm'}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AltertRef;
