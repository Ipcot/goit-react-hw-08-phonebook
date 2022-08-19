import { Circles } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <Circles color="skyblue" height={80} width={80} />
    </LoaderStyled>
  );
};
