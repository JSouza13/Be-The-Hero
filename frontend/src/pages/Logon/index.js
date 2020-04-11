import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import { FiLogIn} from 'react-icons/fi'

import api from '../../services/api';
import { Container } from './styles';

import heroisImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();
  async function handleLogin() {
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <section>
        <img src={logoImg} alt="Be The Hero"/>

        <Form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <Input 
            name="id" 
            type="text" 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
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
