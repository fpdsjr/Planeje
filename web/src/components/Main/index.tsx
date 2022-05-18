import React from 'react';
import Task from '../Task';

import { Container, CreateTaskInput, TasksContainer } from './styles';

function Main() {
  return (
    <Container>
      <CreateTaskInput placeholder="Create a new task..." />
      <TasksContainer>
        <Task />
      </TasksContainer>
    </Container>
  );
}

export default Main;
