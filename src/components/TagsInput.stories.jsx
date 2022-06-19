import { useState } from 'react';

import TagsInput from 'components/TagsInput';

export default {
  component: TagsInput,
};

export const Default = (args) => {
  /* eslint-disable react/destructuring-assignment */
  const [tags, setTags] = useState(args.tags || []);
  return <TagsInput setTags={setTags} tags={tags} />;
};

Default.args = {
  tags: ['frontend', 'react'],
};
