import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { PostKeys } from 'queryKeys';

const createPost = async (newPost) => {
  const { data } = await axios.post('/api/posts', newPost);
  return data;
};

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(PostKeys.list());
    },
  });
};

export default { useCreatePostMutation };
