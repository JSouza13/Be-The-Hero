import React from 'react';
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import { FiArrowLeft} from 'react-icons/fi'

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';


export default function Register() {
  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG</p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para o logon
          </Link>
        </section>
        <Form>
          <Input name="name" type="text" placeholder="Nome da ONG"/>
          <Input name="email" type="email" placeholder="E-mail"/>
          <Input name="whatsapp" placeholder="Whatsapp"/>

          <div className="input-group">
            <Input name="city" type="text" placeholder="Cidade"/>
            <Input name="uf" type="text" placeholder="UF" style={{ width: 80 }}/>
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
