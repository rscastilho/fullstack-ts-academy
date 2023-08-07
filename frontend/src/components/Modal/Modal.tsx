// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, useDisclosure } from '@chakra-ui/react';
import { iModal } from '../../interfaces/iModal';
import { FC } from 'react';
// const { onOpen, isOpen, onClose } = useDisclosure();
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';
import AddUsuario from '../../pages/Administracao/AddUsuario/AddUsuario';

const ModalRef: FC<iModal> = ({ titulo, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button colorScheme="green" onClick={onOpen} size={'sm'}>
        Editar
      </Button>

      <AlertDialog isOpen={isOpen} onClose={onClose} leastDestructiveRef={cancelRef} isCentered size={'5xl'}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {titulo}
            </AlertDialogHeader>

            <AlertDialogBody>
              {/* Tem certeza que deseja deletar {nomeCompleto} ? */}
              <AddUsuario user={user}/>
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

      {/* <Modal isOpen={isOp} onClose={onClose} isCentered motionPreset="slideInBottom" size={'5xl'}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>{titulo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children} </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default ModalRef;
