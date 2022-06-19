import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Container from 'components/Container';
import Header from 'components/Header';
import EditPostModal from 'pages/main/components/EditPostModal';
import MainPage from 'pages/main/MainPage';

const App = () => {
  const [editedPost, setEditedPost] = useState(null);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Routes>
          <Route
            element={<MainPage setEditedPost={setEditedPost} />}
            path="/"
          />
        </Routes>
      </Container>
      {editedPost && (
        <EditPostModal post={editedPost} setEditedPost={setEditedPost} />
      )}
    </>
  );
};
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.grey_100}55;
  }
`;
