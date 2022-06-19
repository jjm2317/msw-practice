import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostPropTypes from 'model/PostPropTypes';
import PostItem from 'pages/main/components/PostItem';

const PostList = ({ postList }) => {
  const handlePostClick = () => {};
  const handleEditClick = () => {};
  const handleDeleteClick = () => {};

  return (
    <List aria-label="post list">
      {postList.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
          onPostClick={handlePostClick}
        />
      ))}
    </List>
  );
};

export default PostList;

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostPropTypes.post).isRequired,
};

const List = styled.ul``;
