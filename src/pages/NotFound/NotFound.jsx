import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      Oops, this page not found go to <Link to="/">Home page!</Link>
    </>
  );
};
