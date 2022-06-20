// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from 'components/Button';
import Typography from 'components/Typography';

const Header = ({ setIsAddingPost }) => {
  const handleClick = () => {
    setIsAddingPost(true);
  };
  return (
    <Container>
      <Typography as="h1" type="h1">
        msw practice
      </Typography>
      <Button
        bgColor="blue_100"
        hoverColor="blue_150"
        size="large"
        onClick={handleClick}
      >
        Add
      </Button>
    </Container>
  );
};

export default Header;

Header.propTypes = {
  setIsAddingPost: PropTypes.func.isRequired,
};

const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
