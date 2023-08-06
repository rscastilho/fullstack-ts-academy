import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import { iUser } from '../../interfaces/iUser';
// import AddUsuario from '../../pages/Administracao/AddUsuario/AddUsuario';

const AltertRef = ({ nomeCompleto }: iUser) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
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

            <AlertDialogBody>Tem certeza que deseja deletar usuario {nomeCompleto}?
            
            {/* <AddUsuario/> */}
            
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} size={'sm'}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3} size={'sm'}>
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
