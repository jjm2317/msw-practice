import PropTypes from 'prop-types';

import PostPropTypes from 'model/PostPropTypes';
import PostModal from 'pages/main/components/PostModal';
import { useUpdatePostMutation } from 'query/updatePost';

const EditPostModal = ({ post, setEditedPost }) => {
  const { mutate, isLoading } = useUpdatePostMutation(post.id);
  const handleConfirm = (newPost) => (e) => {
    e.preventDefault();
    if (isLoading) return;
    mutate(newPost, {
      onSuccess: () => {
        setEditedPost(null);
      },
    });
  };

  const handleCancel = () => {
    setEditedPost(null);
  };

  return (
    <PostModal
      confirmText="Edit"
      isOpen={!!post}
      label="Edit Item"
      post={post}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
};

export default EditPostModal;

EditPostModal.propTypes = {
  post: PostPropTypes.post.isRequired,
  setEditedPost: PropTypes.func.isRequired,
};
