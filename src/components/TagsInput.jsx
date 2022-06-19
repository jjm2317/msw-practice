import { useLayoutEffect } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Tag from 'components/Tag';

const BACKSPACE = 8;
const SPACE_BAR = 32;

const TagsInput = ({ tags, setTags, text, setText }) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === SPACE_BAR) {
      if (tags.length >= 3) return;

      const { value } = e.target;
      if (!value.trim()) return;
      setTags([...tags, value]);
      setText('');
    } else if (e.keyCode === BACKSPACE) {
      if (text === '' && !!tags.length) {
        const lastTag = tags[tags.length - 1];
        setTags((curTags) =>
          curTags.filter((_, index, arr) => index !== arr.length - 1)
        );
        setText(lastTag);
      }
    }
  };

  const handleChange = (e) => {
    if (tags.length >= 3) return;
    setText(e.target.value.trim());
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text');
    const availableNum = 3 - tags.length;
    setTags(
      pasted
        .split(' ')
        .filter((_, index) => index < availableNum)
        .map((tag, index) => (index === 0 ? text + tag : tag))
    );

    setText('');
  };

  useLayoutEffect(() => {
    if (tags.length > 3) {
      setTags(tags.filter((_, index) => index < 3));
    }
  }, []);

  return (
    <Container>
      {tags.map((tag, index) => (
        /* eslint-disable */
        <Tag data-testid="tag" key={index}>
          {tag}
        </Tag>
      ))}
      <Input
        placeholder="Tags"
        aria-label="tag input"
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
      />
    </Container>
  );
};

export default TagsInput;

TagsInput.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setText: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
};

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.color.grey_100};
  border-radius: 3px;
  width: 100%;
  min-height: 35px;
  display: flex;
  gap: 3px;
  padding: 4px;
`;

const Input = styled.input`
  outline: none;
  border: none;
`;
