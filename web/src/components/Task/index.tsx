import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai';
import fetchApi from '../../utils/fetchApi';

import {
  Container,
  ContentContainer,
  TaskEditor,
  ButtonContainer,
} from './styles';
import useToggle from '../../hooks/useToggle';

interface ITasksProps {
  id: string;
  description: string;
  status: string;
  deleteTask: (id: string) => void;
  setIsHavingATaskEvent: Dispatch<SetStateAction<boolean>>;
  isHavingATaskEvent: boolean;
}

function Task({
  id,
  description,
  status,
  deleteTask,
  setIsHavingATaskEvent,
  isHavingATaskEvent,
}: ITasksProps) {
  const [inputValue, setInputValue] = useState('');

  const { toggle, handleToggleClick } = useToggle();

  async function handleSelect(
    { target }: React.ChangeEvent<HTMLSelectElement>,
    id: string,
  ) {
    await fetchApi('patch', `tasks/update/status/${id}`, {
      status: target.value,
    });
    setIsHavingATaskEvent(!isHavingATaskEvent);
  }

  function handleInputChange({ target }: ChangeEvent<HTMLInputElement>) {
    setInputValue(target.value);
  }

  async function handleSubmit(id: string) {
    await fetchApi('put', `tasks/update/${id}`, {
      description: inputValue,
    });
    handleToggleClick();
    setIsHavingATaskEvent(!isHavingATaskEvent);
  }

  return (
    <Container>
      <ContentContainer>
        <p>{description}</p>
        <ButtonContainer>
          <select
            data-testid="select-option"
            onChange={(e) => handleSelect(e, id)}
            value={status}>
            <option value="PENDING">Fazer</option>
            <option value="DOING">Fazendo</option>
            <option value="DONE">Feito</option>
          </select>
          <div data-testid="update-task" onClick={handleToggleClick}>
            <AiFillEdit />
          </div>
          <div data-testid="delete-task" onClick={() => deleteTask(id)}>
            <AiOutlineClose />
          </div>
        </ButtonContainer>
      </ContentContainer>
      <TaskEditor toggleEditor={toggle}>
        <input
          placeholder="Digite para atualizar sua tarefa"
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={() => handleSubmit(id)}>Atualizar</button>
      </TaskEditor>
      <hr />
    </Container>
  );
}

export default Task;
