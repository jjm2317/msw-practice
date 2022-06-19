import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from 'components/Button';
import Tag from 'components/Tag';
import Typography from 'components/Typography';
import { useDeletePostMutation } from 'query/deletePost';
import { usePostDetailQuery } from 'query/post';

const PostDetail = ({ setEditedPost }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data: postDetail, isSuccess } = usePostDetailQuery(Number(postId));
  const { mutate, isLoading } = useDeletePostMutation();

  const handleEditClick = () => {
    setEditedPost(postDetail);
  };

  const handleDeleteClick = () => {
    if (isLoading) return;
    if (window.confirm('정말 삭제하시겠습니까?')) {
      mutate(postId);
      navigate('/');
    }
  };

  return (
    <Container>
      {isSuccess ? (
        <ContentContainer>
          <Typography as="h2" type="h2">
            {postDetail.title}
          </Typography>
          <Typography as="time" color="grey_100" type="b2">
            {postDetail.createdAt}
          </Typography>
          <List>
            {postDetail.tags.map((tag) => (
              <Tag key={tag} as="li">
                {tag}
              </Tag>
            ))}
          </List>
          <Typography as="p" type="b2">
            {postDetail.description}
          </Typography>
          <ButtonContainer>
            <Button
              bgColor="blue_150"
              hoverColor="blue_200"
              onClick={handleEditClick}
            >
              EDIT
            </Button>
            <Button hoverColor="grey_200" onClick={handleDeleteClick}>
              DELETE
            </Button>
          </ButtonContainer>
        </ContentContainer>
      ) : (
        <Typography type="b1">loading</Typography>
      )}
    </Container>
  );
};

export default PostDetail;

PostDetail.propTypes = {
  setEditedPost: PropTypes.func.isRequired,
};

const Container = styled.main`
  padding: 0;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;
