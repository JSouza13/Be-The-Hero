import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import { FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api';

import { Container } from './styles';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(){
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      }) 
      
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente nova')
    }
  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva p caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>
        </section>
        <Form onSubmit={handleNewIncident}>
          <Input 
            name="title" 
            type="text" 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea 
            name="description" 
            type="text" 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <Input 
            name="value" 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </div>
    </Container>
  );
}
