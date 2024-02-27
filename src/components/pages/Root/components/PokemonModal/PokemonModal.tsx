'use client';

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import TPokemonDetailModel from 'types/pokemon/models/PokemonDetail.model';

interface IPokemonModalProps extends ComponentProps<typeof Modal> {
  selectedPokemon: TPokemonDetailModel | null;
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
