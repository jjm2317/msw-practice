import PostItem from 'pages/main/components/PostItem';

export default {
  component: PostItem,
};

export const Default = (args) => <PostItem {...args} />;

Default.args = {
  post: {
    id: 1,
    title: 'Item Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['frontend', 'vue'],
    createdAt: '2022-02-20',
  },
  onDeleteClick: () => {},
  onEditClick: () => {},
  onPostClick: () => {},
};
