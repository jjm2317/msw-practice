import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PostPropTypes from 'model/PostPropTypes';
import PostItem from 'pages/main/components/PostItem';
import { useDeletePostMutation } from 'query/deletePost';

const PostList = ({ postList, setEditedPost }) => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useDeletePostMutation();

  const handlePostClick = (id) => () => {
    navigate(`/posts/${id}`);
  };

  const handleEditClick = (post) => (e) => {
    e.stopPropagation();
    setEditedPost(post);
  };
  const handleDeleteClick = (id) => (e) => {
    if (isLoading) return;
    e.stopPropagation();
    if (window.confirm('정말 삭제하시겠습니까?')) {
      mutate(id);
    }
  };

  return (
    <List aria-label="post list">
      {postList.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeleteClick={handleDeleteClick(post.id)}
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
