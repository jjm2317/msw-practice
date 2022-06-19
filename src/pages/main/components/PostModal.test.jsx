import userEvent from '@testing-library/user-event';

import PostModal from 'pages/main/components/PostModal';
import { render, screen } from 'tests/test-utils';

describe('PostModal 컴포넌트의 동작을 확인합니다.', () => {
  const commonProps = {
    post: {},
    isOpen: true,
    onCancel: () => {},
    onConfirm: () => {},
    confirmText: 'Edit',
    label: 'Edit Post',
  };
  /* eslint-disable react/jsx-props-no-spreading */
  it('제목을 입력받습니다.', () => {
    render(<PostModal {...commonProps} />);
    const textInput = screen.getByRole('textbox', { name: /text input/i });

    const postTitle = 'post modal title';
    userEvent.type(textInput, postTitle);

    expect(textInput).toHaveValue(postTitle);
  });

  it('제목은 40자 이내이고, 초과로 입력시 입력되지 않습니다..', () => {
    render(<PostModal {...commonProps} />);
    const textInput = screen.getByRole('textbox', { name: /text input/i });

    const postTitle = '|abcdefgh||abcdefgh||abcdefgh||abcdefgh|';
    const exceeded = `${postTitle}exceed`;
    userEvent.type(textInput, exceeded);

    expect(textInput).toHaveValue(postTitle);
  });

  it('설명을 입력 받습니다.', () => {
    render(<PostModal {...commonProps} />);
    const textInput = screen.getByRole('textbox', { name: /description/i });

    const description = 'post modal description';
    userEvent.type(textInput, description);

    expect(textInput).toHaveValue(description);
  });

  it('설명은 1000자 이내이고, 초과로 입력시 입력되지 않습니다.', () => {
    render(<PostModal {...commonProps} />);
    const textArea = screen.getByRole('textbox', { name: /description/i });

    const description = 'a'.repeat(1000);
    const exceeded = `${description}exceed`;
    userEvent.type(textArea, exceeded);

    expect(textArea).toHaveValue(description);
  });

  it('태그는 띄어쓰기 단위로 구분됩니다.', () => {
    render(<PostModal {...commonProps} />);
    const tagInput = screen.getByRole('textbox', { name: /tag input/i });

    const tagsText = 'tag1 tag2 ';
    userEvent.type(tagInput, tagsText);

    const tagList = screen.getAllByTestId('tag');

    expect(tagList).toHaveLength(2);
  });

  it('인풋을 하다가 공백을 입력하면 바로 태그 형태로 스타일을 변경합니다.', () => {
    render(<PostModal {...commonProps} />);
    const tagInput = screen.getByRole('textbox', { name: /tag input/i });

    const tagsText = 'tag1';
    userEvent.type(tagInput, tagsText);

    expect(tagInput).toHaveValue(tagsText);
    expect(screen.queryByTestId('tag')).not.toBeInTheDocument();

    userEvent.type(tagInput, ' ');

    expect(screen.getByTestId('tag')).toBeInTheDocument();
  });

  it('태그는 최대 3개까지 작성할 수 있고, 초과 입력시 입력되지 않습니다.', () => {
    render(<PostModal {...commonProps} />);
    const tagInput = screen.getByRole('textbox', { name: /tag input/i });

    const tagsText = 'tag1 tag2 tag3 tag4';
    userEvent.type(tagInput, tagsText);

    expect(screen.getAllByTestId('tag')).toHaveLength(3);
    expect(tagInput).toHaveValue('');

    userEvent.type(tagInput, 'abcd');

    expect(tagInput).toHaveValue('');
  });
});
