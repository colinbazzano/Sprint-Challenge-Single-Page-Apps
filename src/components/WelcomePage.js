import React from "react";

import styled from 'styled-components';

const Header = styled.header`
  border: 1px solid black;
  margin: 0 auto;
  padding: 2%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </Header>
    </section>
  );
}
