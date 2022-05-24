import styled from 'styled-components';

interface IRequest {
  toggleEditor: boolean;
}

export const Container = styled.div`
  position: relative;

  hr {
    border: none;
    height: 1px;
    background-color: var(--veryDarkGrayishBlueHover);
  }
`;

export const ContentContainer = styled.div`
  width: 700px;
  overflow: hidden;
  height: 60px;
  border-radius: 0.25rem;
  background-color: var(--veryDarkDesaturatedBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 1rem;
  color: white;

  select {
    background-color: var(--veryDarkDesaturatedBlue);
    color: white;
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 0.25rem;
  }

  @media (max-width: 800px) {
    width: 380px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  select {
    background-color: var(--veryDarkDesaturatedBlue);
    color: white;
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 0.25rem;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
      filter: brightness(0.5);
    }
  }

  div {
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
      filter: brightness(0.5);
    }
  }
`;

export const TaskEditor = styled.div<IRequest>`
  display: ${(props) => (props.toggleEditor ? '1' : 'none')};
  position: absolute;
  top: 10px;
  left: 10px;
  input {
    width: 400px;
    height: 40px;
    border-radius: 0.25rem;
    background-color: var(--veryDarkBlue);
    border: none;
    font-size: 18px;
    color: white;
    padding: 0.5rem;
    margin-right: 10px;

    &:focus {
      outline: none;
    }

    @media (max-width: 800px) {
      width: 265px;

      &::placeholder {
        font-size: 16px;
      }
    }
  }

  button {
    border: none;
    color: white;
    border-radius: 0.25rem;
    height: 40px;
    padding: 0.5rem;
    font-size: 16px;
    background-color: var(--veryDarkBlue);
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: var(--veryDarkGrayishBlue);
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.4;
    }
  }
`;
