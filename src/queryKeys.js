export const PostKeys = {
  all: () => ['post'],
  list: () => [...PostKeys.all(), 'list'],
  detail: (id) => [...PostKeys.all(), 'detail', id],
};

export default { PostKeys };
