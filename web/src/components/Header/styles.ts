import styled from 'styled-components';
import bgDesktopDark from '../../assets/bg-desktop-dark.jpg';
import bgMobileDark from '../../assets/bg-mobile-dark.jpg';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${bgDesktopDark});
  background-size: cover;
  display: flex;
  align-items: center;

  @media (max-width: 540px) {
    background-image: url(${bgMobileDark});
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: -50px;
  align-items: center;
  justify-content: center;
  color: var(--lightGrayishBlue);
  text-transform: uppercase;

  @media (max-width: 800px) {
    width: 380px;
  }
`;
