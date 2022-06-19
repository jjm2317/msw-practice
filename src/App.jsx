import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import MainPage from 'pages/main/MainPage';

const App = () => (
  <>
    <GlobalStyle />
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  </>
);
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.grey_100}55;
  }
`;
