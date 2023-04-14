import { Container } from "./styles";
import { Button } from "../button";
import { Logo } from "../logo";
import { NewStickyModal } from "../NewStickyModal";
import { useState } from "react";

export function Header () {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
  };

  return (
  <Container>
    <Logo/>
    <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
    <Button title="Adicionar Lembrete" click={() => {handleOpenModal()}}/>
  </Container>
  );
};