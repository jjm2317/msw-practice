import styled from 'styled-components';

const Container = styled.div`
  padding: 15px;
  height: 100vh;
  min-height: 500px;
  max-width: 450px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
`;

export default Container;
