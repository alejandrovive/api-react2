import { Container } from "react-bootstrap";
import SeccionPrincipal from "../Componentes/SeccionPrincipal";
import SeccionSecundaria from "../Componentes/SeccionSecundaria";
import SeccionTerciaria from "../Componentes/SeccionTerciaria";
import React from 'react';

function Home() {
    return (  
        <Container>
            <SeccionPrincipal />
            <SeccionSecundaria />
            <SeccionTerciaria />
        </Container>
   

    );
  }
  
  export default Home;