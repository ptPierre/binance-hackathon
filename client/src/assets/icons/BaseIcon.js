import { styled, SvgIcon } from "@material-ui/core";

const ICON_MODIFIERS = {
  small: () => ({
    width: 8,
    height: 8,
  }),
  large: () => ({
    width: 24,
    height: 24,
  }),
  inverted: () => ({
    '& > path': {
      fill: ({ theme }) => theme.primaryColor 
    }
  }),
};

const Icon = styled(({ ...props }) => <SvgIcon {...props} />)({
  fill: 'none',
  marginRight: 8,
  width: ({ theme }) => ICON_MODIFIERS[theme].width || 16,
  height: ({ theme }) => ICON_MODIFIERS[theme].height || 16,
  '& > path': {
    fill: ({ theme }) => theme.textColorOnPrimary,
    transition: 'fill 0.2s linear',
  },
  '&:hover, &:focus': {
    '& > path': {
      fill: ({ theme }) =>
        ICON_MODIFIERS[theme]['& > path'] || theme.textColorOnPrimary,
    },
  },
});

export default Icon;
