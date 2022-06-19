import axios from 'axios';
import { useQuery } from 'react-query';

import { PostKeys } from 'queryKeys';

const getPostList = async () => {
  const { data } = await axios.get('/api/posts');
  return data;
};

const getPostDetail = async (id) => {
  const { data } = await axios.get(`/api/posts/${id}`);
  return data;
};

export const usePostListQuery = () =>
  useQuery(PostKeys.list(), getPostList, {
    select: (result) =>
      result.sort((postA, postB) =>
        postA.createdAt < postB.createdAt ? 1 : -1
      ),
  });

export const usePostDetailQuery = (postId) =>
  useQuery(PostKeys.detail(postId), () => getPostDetail(postId));

export default { usePostListQuery, usePostDetailQuery };
