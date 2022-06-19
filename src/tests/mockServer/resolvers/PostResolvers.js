import { postList } from 'tests/mocks/postList';
import { getStorageItem, setStorageItem } from 'utils';

export const initPostList = () => {
  if (!Array.isArray(getStorageItem('data'))) {
    setStorageItem('data', postList);
  }
};

initPostList();

const list = (req, res, ctx) => {
  const data = getStorageItem('data');

  return res(ctx.status(200), ctx.json(data));
};

const detail = (req, res, ctx) => {
  const { postId } = req.params;
  const posts = getStorageItem('data');
  const item = posts.find(({ id }) => id === Number(postId));

  if (item) {
    return res(ctx.status(200), ctx.json(item));
  }
  return res(ctx.status(404));
};

const createPost = (req, res, ctx) => {
  const payload = req.body;

  const posts = getStorageItem('data');
  const newPosts = posts.concat({
    ...payload,
    id: Math.max(...posts.map(({ id }) => id)) + 1,
  });

  setStorageItem('data', newPosts);

  return res(ctx.status(201));
};

const deletePost = (req, res, ctx) => {
  const { postId } = req.params;

  const posts = getStorageItem('data');
  const newPosts = posts.filter(({ id }) => id !== Number(postId));

  setStorageItem('data', newPosts);

  return res(ctx.status(200));
};

const updatePost = (req, res, ctx) => {
  const { postId } = req.params;
  const payload = req.body;

  const posts = getStorageItem('data');
  const newPosts = posts.map((post) =>
    post.id === postId ? { ...post, ...payload } : post
  );

  setStorageItem('data', newPosts);

  return res(ctx.status(200));
};

const PostResolvers = {
  list,
  detail,
  createPost,
  deletePost,
  updatePost,
};

export default PostResolvers;
