import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = ({ value, onChange, placeholder = '' }) => (
  <Input
    aria-label="description"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Input = styled.textarea`
  border: 1px solid ${({ theme }) => theme.color.grey_100};
  border-radius: 3px;
  ${({ theme }) => theme.typography.b2}
  width:100%;
  height: 200px;
  resize: none;
`;
