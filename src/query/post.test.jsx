import { usePostListQuery } from 'query/post';
import { initPostList } from 'tests/mockServer/resolvers/PostResolvers';
import { AllTheProviders, renderHook, waitFor } from 'tests/test-utils';

beforeEach(() => {
  localStorage.clear();
  initPostList();
});

test('usePostListQuery retrieve post list.', async () => {
  const { result } = renderHook(() => usePostListQuery(), {
    wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data[0]).toHaveProperty(
    'id',
    'title',
    'description',
    'tags',
    'createdAt'
  );
});
