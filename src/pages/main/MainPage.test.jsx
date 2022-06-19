import { MemoryRouter } from 'react-router-dom';

import MainPage from 'pages/main/MainPage';
import { initPostList } from 'tests/mockServer/resolvers/PostResolvers';
import { render, screen } from 'tests/test-utils';

beforeEach(() => {
  localStorage.clear();
  initPostList();
});

describe('MainPage 컴포넌트의 동작을 확인합니다.', () => {
  it('post list 를 보여줍니다.', async () => {
    render(
      <MemoryRouter>
        <MainPage setEditedPost={() => {}} />
      </MemoryRouter>
    );

    const postList = await screen.findByRole('list', { name: /post list/ });

    expect(postList).toBeInTheDocument();
  });
});
