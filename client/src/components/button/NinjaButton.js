import React from 'react';
import { styled } from '@material-ui/core/styles';
import { colorTheme } from '../../config/theme';
import { typeScale } from '../../utils/typography';
import { Button } from '@material-ui/core';
import { defaultTheme } from '../../utils/themes';

const BaseButton = styled(({ color, backgroundColor, ...props }) => <Button {...props} />)({
  minHeight: 40,
  minWidth: 100,
  transition: 'background-color 0.2s linear, color 0.2s linear',
  padding: ({ padding = '10px 24px' }) => padding,
  fontSize: ({ size = typeScale.paragraph || 16 }) => size,
  border: ({ border = 'none' }) => border,
  borderRadius: ({ borderRadius = 2 }) => borderRadius,
  fontFamily: ({ fontFamily = '"Roboto Mono", monospace' }) => fontFamily,
  textTransform: ({ textTransform = 'capitalize' }) => textTransform,
  color: ({ color = '#fff' }) => color,
  backgroundColor: ({ backgroundColor = 'inherit' }) => backgroundColor,
  '&:hover': {
    backgroundColor: defaultTheme.primaryHoverColor,
    color: defaultTheme.textColorOnPrimary,
  },
  '&:focus': {
    outline: `3px solid ${defaultTheme.primaryHoverColor}`,
    outlineOffset: 2,
  },
  '&:active': {
    backgroundColor: defaultTheme.primaryActiveColor,
    borderColor: defaultTheme.primaryActiveColor,
    color: defaultTheme.textColorOnPrimary,
  },
  '&:disabled': {
    backgroundColor: defaultTheme.disabled,
    color: defaultTheme.textOnDisabled,
    cursor: 'not-allowed',
  },
});

export const NinjaButton = styled(({ text, ...props }) => (
  <BaseButton
    backgroundColor={colorTheme.blue}
    color="#fff"
    {...props}
  >
    {text}
  </BaseButton>
))({
  '&:disabled': {
    backgroundColor: 'none',
    color: defaultTheme.disabled
  }
});

export const NinjaButtonSec = styled(({ text, ...props }) => (
  <BaseButton
    backgroundColor="none"
    border={`2px solid ${colorTheme.blue}`}
    color={colorTheme.blue}
    padding="8px 22px"
    {...props}
  >
    {text}
  </BaseButton>
))({
  '&:disabled': {
    backgroundColor: 'none',
    color: defaultTheme.disabled,
  },
});

export const NinjaButtonTer = ({ text, ...props }) => (
  <BaseButton
    backgroundColor="none"
    border="none"
    color={colorTheme.blue}
    {...props}
  >
    {text}
  </BaseButton>
);

export default NinjaButton;
