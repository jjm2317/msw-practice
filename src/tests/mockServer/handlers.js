import { rest } from 'msw';

import PostResolvers from 'tests/mockServer/resolvers/PostResolvers';
import TestResolvers from 'tests/mockServer/resolvers/TestResolvers';

const handlers = [
  rest.get('/test', TestResolvers.test),
  rest.get('/api/posts', PostResolvers.list),
  rest.get('/api/posts/:postId', PostResolvers.detail),
  rest.post('/api/posts', PostResolvers.createPost),
  rest.delete('/api/posts/:postId', PostResolvers.deletePost),
  rest.put('/api/posts/:postId', PostResolvers.updatePost),
];

export default handlers;
