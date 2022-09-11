// import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';
import { Link } from '@mui/material';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <Box as="h4" m="0 auto" p={4} color="lightslategray">
        Oops, this page not found go to{' '}
        <Link underline="hover" to="/login">
          Home page!
        </Link>
      </Box>
    </>
  );
};
