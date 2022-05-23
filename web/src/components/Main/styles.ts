import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  height: 280px;
  position: relative;
  bottom: 180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  footer {
    position: relative;
    width: 700px;
    border-radius: 0px 0 0.25rem 0.25rem;
    background-color: var(--veryDarkDesaturatedBlue);
    padding: 1.3rem;
    top: -32px;

    div {
      display: flex;
      gap: 8rem;
      align-items: center;
      justify-content: center;

      button {
        border: none;
        background-color: var(--veryDarkDesaturatedBlue);
        color: var(--lightGrayishBlue);
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--veryDarkGrayishBlueHover);
          transform: scale(1.05);
        }
      }
    }
  }
`;

export const CreateTaskInput = styled.input`
  width: 700px;
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
  position: relative;
  width: 700px;
  height: 500px;
  background-color: var(--veryDarkDesaturatedBlue);
  border-radius: 0.25rem;
`;

export const ErrorComponent = styled.div`
  text-align: justify;
  color: var(--lightGrayishBlueHover);
`;
