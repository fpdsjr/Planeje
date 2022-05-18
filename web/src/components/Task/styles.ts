import styled from 'styled-components';

export const Container = styled.div`
  hr {
    border: none;
    height: 1px;
    background-color: var(--veryDarkGrayishBlueHover); /* Modern Browsers */
  }
`;

export const ContentContainer = styled.div`
  width: 850px;
  height: 60px;
  border-radius: 0.25rem;
  background-color: var(--veryDarkDesaturatedBlue);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 1rem;
  color: white;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  select {
    background-color: var(--veryDarkDesaturatedBlue);
    color: white;
    width: 90px;
    height: 30px;
    border: none;
    border-radius: 0.25rem;
  }
`;
