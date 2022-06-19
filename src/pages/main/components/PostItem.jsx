import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Tag from 'components/Tag';
import Typography from 'components/Typography';
import PostPropTypes from 'model/PostPropTypes';

const PostItem = ({ post, onEditClick, onPostClick, onDeleteClick }) => (
  <Item onClick={onPostClick}>
    <Typography as="h3" color="blue_150" type="h2">
      {post.title}
    </Typography>
    <TagList>
      {post.tags.map((tag, index) => (
        /* eslint-disable react/no-array-index-key */
        <Tag key={`${tag}-${index}`} as="li">
          {tag}
        </Tag>
      ))}
    </TagList>
    <Description as="p" marginBottom={30} type="b1">
      {post.description}
    </Description>
    <BottomContainer>
      <ButtonContainer>
        <Button bgColor="grey_150" hoverColor="grey_200" onClick={onEditClick}>
          EDIT
        </Button>
        <Button hoverColor="grey_200" onClick={onDeleteClick}>
          DELETE
        </Button>
      </ButtonContainer>
      <Typography as="time" color="grey_100" type="b2">
        {post.createdAt}
      </Typography>
    </BottomContainer>
  </Item>
);

export default PostItem;

PostItem.propTypes = {
  post: PostPropTypes.post.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onPostClick: PropTypes.func.isRequired,
};

const Item = styled.li`
  list-style: none;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.color.grey_100};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.blue_100};
  }
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
`;

const Description = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BottomContainer = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`;
