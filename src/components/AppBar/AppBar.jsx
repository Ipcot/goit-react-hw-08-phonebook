import { Box } from 'components/Box/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'HOME' },
  // { href: '', text: 'MOVIES' },
];

export const AppBar = () => {
  return (
    <Box as="header" p={4} borderBottom="1px solid black">
      <Box as="nav" display="flex">
        <h1>TEST</h1>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};
