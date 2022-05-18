import styled from 'styled-components';
import bgDesktopDark from '../../assets/bg-desktop-dark.jpg';

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-image: url(${bgDesktopDark});
  background-size: cover;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  color: var(--lightGrayishBlue);
  text-transform: uppercase;
`;
