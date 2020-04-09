import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn} from 'react-icons/fi'

import { Container } from './styles';

import heroisImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be The Hero"/>

        <Form>
          <h1>Faça seu logon</h1>

          <Input name="id" type="text" placeholder="Sua ID"/>
          <button type="submit">Entrar</button>

          <Link to="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </Form>
      </section>

      <img src={heroisImg} alt="herois"/>
    </Container>   
  );
}
