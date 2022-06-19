import { useState } from 'react';

import TagsInput from 'components/TagsInput';

export default {
  component: TagsInput,
};

export const Default = (args) => {
  /* eslint-disable react/destructuring-assignment */
  const [tags, setTags] = useState(args.tags || []);
  const [text, setText] = useState('');
  return (
    <TagsInput setTags={setTags} setText={setText} tags={tags} text={text} />
  );
};

Default.args = {
  tags: ['frontend', 'react'],
};
