import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { iModal } from '../../interfaces/iModal';
import { FC } from 'react';
const ModalRef: FC<iModal> = ({ children, titulo, isOp, onCl }) => {
  return (
    <>
      <Modal isOpen={isOp} onClose={onCl} isCentered motionPreset="slideInBottom" size={'5xl'}>
        <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />
        <ModalContent>
          <ModalHeader>{titulo}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={onCl}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalRef;
