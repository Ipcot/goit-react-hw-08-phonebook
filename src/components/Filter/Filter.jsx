import { Input } from './Filter.styled';
import { Box } from 'components/Box/Box';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(filterChange(value));
  };
  return (
    <>
      <Box textAlign="center" colors={p => p.theme.colors.black} as="p">
        Find contacts by name
      </Box>
      <Input
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleChange(e.target.value)}
      ></Input>
    </>
  );
};
