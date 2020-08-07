import React from 'react';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img src="https://avatars3.githubusercontent.com/u/833342?s=460&u=0fab300b0b2a41e8cdec02003528a3889088afd2&v=4"
            alt="Rafael Oliveira"/>
          <div>
            <strong>unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars3.githubusercontent.com/u/833342?s=460&u=0fab300b0b2a41e8cdec02003528a3889088afd2&v=4"
            alt="Rafael Oliveira"/>
          <div>
            <strong>unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#">
          <img src="https://avatars3.githubusercontent.com/u/833342?s=460&u=0fab300b0b2a41e8cdec02003528a3889088afd2&v=4"
            alt="Rafael Oliveira"/>
          <div>
            <strong>unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms! rocket</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
