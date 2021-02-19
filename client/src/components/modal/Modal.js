import React from 'react';
import { styled } from '@material-ui/core';
import { CloseIcon, SignupIconRaw } from '../../assets';
import { typeScale } from '../../utils/typography';
import NinjaButton from '../button/NinjaButton';
import { defaultTheme } from '../../utils/themes';

const ModalWrapper = styled(({ show, ...props }) => <div {...props} />)({
  width: '800px',
  height: '500px',
  boxShadow: '0 5px 16px 0px rgba(0,0,0,0.2)',
  backgroundColor: defaultTheme.formElementBackground,
  color: defaultTheme.textOnFormElementBackground,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '2px',
  margin: '100px auto 0',
  opacity: ({ show }) => (show ? 1 : 0),
  transform: ({ show }) => `translateY(${show ? 0 : '-150%'})`,
  transition: 'transform 0.5s ease-out, opacity 1s ease-in-out',
});

const SignupHeader = styled(({ children, ...props }) => <h3 {...props}>{children}</h3>)({
  fontSize: typeScale.header3
});

const SignupText = styled(({ children, ...props }) => <p {...props}>{children}</p>)({
  fontSize: typeScale.paragraph,
  maxWidth: '70%',
  textAlign: 'center'
});

const CloseModalButton = styled(({ ...props }) => <button {...props} />)({
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  position: 'absolute',
  right: '40px',
  top: 40,
  width: '24px',
  height: '24px',
  padding: 0
});

const SignupModal = ({ show, onShow }) => (
  <ModalWrapper theme="dark" show={show}>
    <img
      src={SignupIconRaw}
      alt="Signup for NFTs"
      aria-hidden="true"
    />
    <SignupHeader>Sign Up</SignupHeader>
    <SignupText>Sign up today to get access!</SignupText>
    <NinjaButton text="Sign up!" />
  <CloseModalButton aria-label="Close modal" onClick={onShow}>
      <CloseIcon />
    </CloseModalButton>
  </ModalWrapper>
);

export default SignupModal;
