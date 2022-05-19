import { GlobalStyle } from './styles/global';

import { Container } from './styles/';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <GlobalStyle />
    </Container>
  );
}

export default App;
