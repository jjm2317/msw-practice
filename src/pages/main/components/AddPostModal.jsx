import PropTypes from 'prop-types';

import PostModal from 'pages/main/components/PostModal';
import { useCreatePostMutation } from 'query/createPost';
import { formatYYYYMMDD } from 'utils';

const AddPostModal = ({ isOpen, setIsOpen }) => {
  const { mutate, isLoading } = useCreatePostMutation();
  const handleConfirm = (newPost) => (e) => {
    e.preventDefault();
    if (isLoading) return;
    mutate(
      { ...newPost, createdAt: formatYYYYMMDD(new Date()) },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      }
    );
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <PostModal
      confirmText="Add"
      isOpen={isOpen}
      label="Add Item"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  );
};

export default AddPostModal;

AddPostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
