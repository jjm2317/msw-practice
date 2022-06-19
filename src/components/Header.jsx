// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

const Header = () => {
  const handleClick = () => {};
  return (
    <Container>
      <Typography as="h1" type="h1">
        Law&Good List
      </Typography>
      <Button size="large" onClick={handleClick}>
        Add
      </Button>
    </Container>
  );
};

export default Header;

Header.propTypes = {};

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
