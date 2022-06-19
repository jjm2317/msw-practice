import axios from 'axios';
import { useQuery } from 'react-query';

import { PostKeys } from 'queryKeys';

const getPostList = async () => {
  const { data } = await axios.get('/api/posts');
  return data;
};

export const usePostListQuery = (queryConfig) => {
  const result = useQuery(PostKeys.list(), getPostList, queryConfig);

  return result;
};

export default { usePostListQuery };
