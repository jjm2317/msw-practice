import React from 'react';

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Typography from 'components/Typography';

const Modal = ({ isOpen, title, children }) => (
  <ModalWrapper isOpen={isOpen}>
    <ModalBackground isOpen={isOpen} />
    <ModalContainer>
      <TitleContainer>
        <Typography as="h2" type="h2">
          {title}
        </Typography>
      </TitleContainer>
      <ContentContainer>{children}</ContentContainer>
    </ModalContainer>
  </ModalWrapper>
);

export default Modal;

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const ModalWrapper = styled.div`
  z-index: ${({ isOpen }) => (isOpen ? 100 : -100)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  ${({ isOpen }) =>
    isOpen ||
    css`
      pointer-events: none;
    `}
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 15px;
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
`;

const TitleContainer = styled.div`
  height: 56px;
`;

const ContentContainer = styled.div`
  height: 100%;
`;
