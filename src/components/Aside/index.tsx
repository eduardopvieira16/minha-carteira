import React from "react";

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
} from "./styles";

import logoImg from "../../assets/logo.svg";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogImg src={logoImg} alt="Logo Minha Carteira" />
        <Title>Minha Carteira</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink>
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
