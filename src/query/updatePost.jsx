import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { PostKeys } from 'queryKeys';

const updatePost = async (id, post) => {
  const { data } = await axios.put(`/api/posts/${id}`, post);
  return data;
};

export const useUpdatePostMutation = (postId) => {
  const queryClient = useQueryClient();
  return useMutation((post) => updatePost(postId, post), {
    onSuccess: () => {
      queryClient.invalidateQueries(PostKeys.list());
      queryClient.invalidateQueries(PostKeys.detail(postId));
    },
  });
};

export default { useUpdatePostMutation };
