import React, { useState, FormEvent } from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

interface Repository {
  fullname: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState('');

  async function handleAddRepository<Repository>(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const response = await api.get(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setNewRepo('');
  }

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={ (e) => setNewRepo(e.target.value) }/>

        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.fullname} href="teste">
            <img src={repository.owner.avatar_url}
              alt={repository.owner.login}/>
            <div>
              <strong>{ repository.fullname }</strong>
              <p>{ repository.description }</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
