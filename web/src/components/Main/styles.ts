import styled from 'styled-components';

export const Container = styled.div`
  width: 950px;
  height: 900px;
  position: relative;
  bottom: 140px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

export const CreateTaskInput = styled.input`
  width: 850px;
  height: 60px;
  border-radius: 0.25rem;
  background-color: var(--veryDarkDesaturatedBlue);
  border: none;
  font-size: 18px;
  color: white;
  padding: 1rem;

  &:focus {
    outline: none;
  }
`;

export const TasksContainer = styled.div`
  width: 850px;
  height: 500px;
  background-color: var(--veryDarkDesaturatedBlue);
  border-radius: 0.25rem;
`;
