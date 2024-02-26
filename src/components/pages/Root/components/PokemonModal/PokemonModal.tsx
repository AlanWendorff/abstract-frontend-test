'use client';

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { IPokemonDetailDTO } from 'interfaces/pokemon/dto/PokemonDetail.dto';

interface IPokemonModalProps extends ComponentProps<typeof Modal> {
  selectedPokemon: IPokemonDetailDTO | null;
}

const PokemonModal: FC<IPokemonModalProps> = ({ selectedPokemon, children, ...rest }) => (
  <Modal {...rest}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader textTransform='capitalize'>{selectedPokemon?.name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </Modal>
);

export default PokemonModal;
