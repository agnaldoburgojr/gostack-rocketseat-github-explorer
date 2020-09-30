import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

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
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12599575?s=460&u=64383f999caa2522e7bb331bacab1439d3ff714c&v=4"
            alt="Agnaldo Burgo Junior"
          />
          <div>
            <strong>agnaldoburgojr/todo-app</strong>
            <p>Minha primeira todo list</p>
          </div>
          <FiChevronRight size={28} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12599575?s=460&u=64383f999caa2522e7bb331bacab1439d3ff714c&v=4"
            alt="Agnaldo Burgo Junior"
          />
          <div>
            <strong>agnaldoburgojr/todo-app</strong>
            <p>Minha primeira todo list</p>
          </div>
          <FiChevronRight size={28} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/12599575?s=460&u=64383f999caa2522e7bb331bacab1439d3ff714c&v=4"
            alt="Agnaldo Burgo Junior"
          />
          <div>
            <strong>agnaldoburgojr/todo-app</strong>
            <p>Minha primeira todo list</p>
          </div>
          <FiChevronRight size={28} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
