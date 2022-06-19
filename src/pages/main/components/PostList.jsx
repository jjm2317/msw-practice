import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PostPropTypes from 'model/PostPropTypes';
import PostItem from 'pages/main/components/PostItem';

const PostList = ({ postList, setEditedPost }) => {
  const navigate = useNavigate();

  const handlePostClick = (id) => () => {
    navigate(`/posts/${id}`);
  };

  const handleEditClick = (post) => (e) => {
    e.stopPropagation();
    setEditedPost(post);
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation();
  };

  return (
    <List aria-label="post list">
      {postList.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick(post)}
          onPostClick={handlePostClick(post.id)}
        />
      ))}
    </List>
  );
};

export default PostList;

PostList.propTypes = {
  postList: PropTypes.arrayOf(PostPropTypes.post).isRequired,
  setEditedPost: PropTypes.func.isRequired,
};

const List = styled.ul``;
