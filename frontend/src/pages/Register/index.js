import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';
import { Container } from './styles';

import logoImg from '../../assets/logo.svg';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  };

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG.</p>

          <Link to="/">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para o logon
          </Link>
        </section>
        <Form onSubmit={handleRegister}>
          <Input 
            name="name"
            type="text" 
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input 
            name="email"
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            name="whatsapp"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <Input 
              name="city"
              type="text" 
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <Input 
              name="uf"
              type="text" 
              placeholder="UF" 
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
