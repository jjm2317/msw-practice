import PropTypes from 'prop-types';
import styled from 'styled-components';

import Typography from 'components/Typography';
import PostList from 'pages/main/components/PostList';
import { usePostListQuery } from 'query/post';

const MainPage = ({ setEditedPost }) => {
  const { data: postList, isSuccess } = usePostListQuery();

  return (
    <Container>
      {isSuccess ? (
        <PostList postList={postList} setEditedPost={setEditedPost} />
      ) : (
        <Typography type="b1">loading</Typography>
      )}
    </Container>
  );
};

export default MainPage;

MainPage.propTypes = {
  setEditedPost: PropTypes.func.isRequired,
};

const Container = styled.main`
  padding: 0;
  max-height: 700px;
  overflow-y: auto;
`;
