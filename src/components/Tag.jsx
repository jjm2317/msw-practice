import styled from 'styled-components';

const Tag = styled.div`
  padding: 3px;
  background-color: ${({ theme }) => theme.color.blue_100};
  color: ${({ theme }) => theme.color.white};
  width: fit-content;
  border-radius: 3px;
  ${({ theme }) => theme.typography.caption}
`;

export default Tag;
