import React, { ChangeEvent, useEffect, useState } from 'react';
import fetchApi from '../../utils/fetchApi';
import handleSortFilter from '../../utils/handleSort';
import Task from '../Task';

import { Container, CreateTaskInput, TasksContainer } from './styles';

interface IRequest {
  id: string;
  description: string;
  status: string;
  created_at: Date;
}

function Main() {
  const [task, setTask] = useState('');
  const [getAllTasks, setGetAllTasks] = useState<IRequest[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isHavingATaskEvent, setIsHavingATaskEvent] = useState(false);

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setTask(target.value);
  }

  async function onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      await fetchApi('post', '/tasks/create', {
        description: task,
      });

      setTask('');
      setIsHavingATaskEvent(!isHavingATaskEvent);
    }
  }

  async function handleFetch() {
    const { data } = await fetchApi('get', 'tasks/list');
    setGetAllTasks(data);
  }

  async function deleteTask(id: string) {
    await fetchApi('delete', `tasks/delete/${id}`);
    setIsHavingATaskEvent(!isHavingATaskEvent);
  }

  function handleSort(sort: string) {
    const arraySorted = handleSortFilter(getAllTasks, sort);

    setGetAllTasks(arraySorted!);
    setIsFiltered(!isFiltered);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    handleFetch();
  }, [isHavingATaskEvent]);

  return (
    <Container>
      <CreateTaskInput
        onKeyPress={onKeyPress}
        value={task}
        onChange={handleChange}
        placeholder="Adicionar uma nova tarefa..."
      />
      <TasksContainer>
        {getAllTasks.map(({ id, description, status }) => (
          <Task
            key={id}
            id={id}
            description={description}
            status={status}
            deleteTask={deleteTask}
            setIsHavingATaskEvent={setIsHavingATaskEvent}
            isHavingATaskEvent={isHavingATaskEvent}
          />
        ))}
      </TasksContainer>
      <footer>
        <div>
          <button onClick={() => handleSort('status')}>Status</button>
          <button onClick={() => handleSort('created_at')}>
            Data de criação
          </button>
          <button onClick={() => handleSort('description')}>
            Ordem alfabética
          </button>
        </div>
      </footer>
    </Container>
  );
}

export default Main;
