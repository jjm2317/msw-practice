import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextInput = ({ value, onChange, placeholder = '' }) => (
  <Input
    placeholder={placeholder}
    type="text"
    value={value}
    onChange={onChange}
  />
);

export default TextInput;

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.color.grey_100};
  border-radius: 3px;
  ${({ theme }) => theme.typography.b2}
  width:100%;
`;
