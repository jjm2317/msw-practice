import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Container from 'components/Container';
import Header from 'components/Header';
import MainPage from 'pages/main/MainPage';

const App = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Routes>
        <Route element={<MainPage />} path="/" />
      </Routes>
    </Container>
  </>
);
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.grey_100}55;
  }
`;
