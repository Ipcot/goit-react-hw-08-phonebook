import { Box } from '@mui/material';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Box as="h1" m="0 auto" p={4} color="lightslategray">
        PHONEBOOK
      </Box>
      <Box as="h4" m="0 auto" p={4} color="lightslategray">
        Please Login or Regirster yourself
      </Box>
    </>
  );
};
