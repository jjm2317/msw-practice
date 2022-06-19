import PostModal from 'pages/main/components/PostModal';

export default {
  component: PostModal,
};

export const Default = (args) => <PostModal {...args} />;

Default.args = {
  isOpen: true,
  label: 'Edit Post',
  post: ['frontend', 'react'],
  onConfirm: () => {},
  onDelete: () => {},
  title: 'title',
  confirmText: 'Edit',
};
