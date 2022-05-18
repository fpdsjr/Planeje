import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';

import { Container, ContentContainer } from './styles';

function Task() {
  return (
    <Container>
      <ContentContainer>
        <p>Adicionar uma nova task</p>
        <div>
          <select>
            <option value="PENDING">Pendente</option>
            <option value="DOING">Fazendo</option>
            <option value="DONE">Pronto</option>
          </select>
          <AiFillEdit />
          <AiOutlineClose />
        </div>
      </ContentContainer>
      <hr />
    </Container>
  );
}

export default Task;
