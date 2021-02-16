import { render } from '@testing-library/react';
import { Header, HeaderControls, HeaderNav, HeaderLogo } from '../components';
import App from './App';

const Components = [
  App,
  Header,
  HeaderControls,
  HeaderLogo,
  HeaderNav
];

const props = {
  HeaderLogo: {
    text: 'Test',
  },
  HeaderNav: {
    navItems: [
      { text: 'Test1' },
      { text: 'Test2' },
    ],
  },
};

describe('Component Snapshots', () => {
  Components.forEach((Component) => {
    test(`${Component.name}`, () => {
      const { asFragment } = render(<Component {...props[Component.name]} />);
      const appRender = asFragment();
      expect(appRender).toMatchSnapshot();
    });
  });
});
