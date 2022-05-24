import styled from 'styled-components';

interface ITaskCont {
  taskCont: number;
}

export const Container = styled.div<ITaskCont>`
  width: 800px;
  height: 230px;
  position: relative;
  bottom: 180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 800px) {
    width: 380px;
  }

  footer {
    display: ${(props) => (props.taskCont > 0 ? '1' : 'none !important')};
    position: relative;
    width: 700px;
    border-radius: 0px 0 0.25rem 0.25rem;
    background-color: var(--veryDarkDesaturatedBlue);
    padding: 1.3rem;
    top: -32px;
    background-image: linear-gradient(
      to right top,
      #721d7b,
      #6c1d85,
      #642090,
      #58239b,
      #4628a6
    );

    @media (max-width: 800px) {
      width: 380px;
    }

    div {
      display: flex;
      gap: 4rem;
      align-items: center;
      justify-content: center;

      button {
        border: none;
        background: none;
        color: var(--lightGrayishBlue);
        transition: all 0.2s ease-in-out;

        &:hover {
          color: var(--veryDarkBlue);
          transform: scale(1.05);
        }
      }

      @media (max-width: 800px) {
        gap: 3rem;
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

  @media (max-width: 800px) {
    width: 380px;
  }
`;

export const TasksContainer = styled.div<ITaskCont>`
  display: ${(props) => (props.taskCont > 0 ? '1' : 'none !important')};
  position: relative;
  width: 700px;
  height: 500px;
  background-color: var(--veryDarkDesaturatedBlue);
  border-radius: 0.25rem;

  @media (max-width: 800px) {
    width: 380px;
  }
`;

export const ErrorComponent = styled.div`
  text-align: justify;
  color: var(--lightGrayishBlueHover);
`;
