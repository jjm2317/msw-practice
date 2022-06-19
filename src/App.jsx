import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Container from 'components/Container';
import Header from 'components/Header';
import PostDetail from 'pages/detail/PostDetail';
import AddPostModal from 'pages/main/components/AddPostModal';
import EditPostModal from 'pages/main/components/EditPostModal';
import MainPage from 'pages/main/MainPage';

const App = () => {
  const [editedPost, setEditedPost] = useState(null);
  const [isAddingPost, setIsAddingPost] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header setIsAddingPost={setIsAddingPost} />
        <Routes>
          <Route
            element={<PostDetail setEditedPost={setEditedPost} />}
            path="/posts/:postId"
          />
          <Route
            element={<MainPage setEditedPost={setEditedPost} />}
            path="/"
          />
        </Routes>
      </Container>
      {editedPost && (
        <EditPostModal post={editedPost} setEditedPost={setEditedPost} />
      )}
      {isAddingPost && (
        <AddPostModal isOpen={isAddingPost} setIsOpen={setIsAddingPost} />
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
