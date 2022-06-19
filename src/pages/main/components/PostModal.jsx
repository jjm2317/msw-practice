import { useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Modal from 'components/Modal';
import TagsInput from 'components/TagsInput';
import TextArea from 'components/TextArea';
import TextInput from 'components/TextInput';
import PostPropTypes from 'model/PostPropTypes';

const PostModal = ({
  isOpen,
  post = {},
  onCancel,
  onConfirm,
  confirmText,
  label,
}) => {
  const [title, setTitle] = useState(post.title || '');
  const [description, setDescription] = useState(post.description || '');
  const [tags, setTags] = useState(post.tags || []);
  const [tagText, setTagText] = useState('');

  const handleTitleChange = (e) => {
    if (title.length >= 40) {
      return;
    }
    setTitle(e.target.value);
  };

  const handleDescChange = (e) => {
    if (description.length >= 1000) {
      return;
    }
    setDescription(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} title={label}>
      <Form>
        <TextInput
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          placeholder="Description"
          value={description}
          onChange={handleDescChange}
        />
        <TagsInput
          setTags={setTags}
          setText={setTagText}
          tags={tags}
          text={tagText}
        />
        <ButtonContainer>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            bgColor="blue_100"
            hoverColor="blue_200"
            onClick={onConfirm({
              ...post,
              title,
              description,
              tags: tagText ? tags.concat(tagText) : tags,
            })}
          >
            {confirmText}
          </Button>
        </ButtonContainer>
      </Form>
    </Modal>
  );
};

export default PostModal;

PostModal.propTypes = {
  confirmText: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  post: PostPropTypes.post.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
