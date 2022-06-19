import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

import { PostKeys } from 'queryKeys';

const deletePost = async (id) => {
  const { data } = await axios.delete(`/api/posts/${id}`);
  return data;
};

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deletePost, {
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries(PostKeys.list());
      queryClient.invalidateQueries(PostKeys.detail(postId));
    },
  });
};

export default { useDeletePostMutation };
