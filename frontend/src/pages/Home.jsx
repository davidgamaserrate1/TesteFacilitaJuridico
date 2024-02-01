import React from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { AddIcon} from '@chakra-ui/icons'
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
 
export function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()

return (
    <>
    <Header/>
    <div className="main_content">
        <Button onClick={onOpen} leftIcon={<AddIcon />} bg='var(--green-color)' color='var(--white-color)'  variant='outline'>
            Adicionar cliente
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           aaaa
          </ModalBody>

          <ModalFooter>
            <Button  colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="top_actions">

        </div>
    </div>
    </>
  );
}
