import { AppBar } from 'components/AppBar';
import { Box } from 'components/Box/Box';
import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
// import { Loader } from 'components/Loader';

export const Layout = () => {
  return (
    <Box display="grid" gridTemplateRows="60px 1fr">
      <AppBar />
      {/* <Suspense fallback={<Loader />}> */}
      <Outlet />
      {/* </Suspense> */}
    </Box>
  );
};
