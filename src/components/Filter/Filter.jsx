import { Input } from './Filter.styled';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/contacts';
import { getFilter } from 'redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = value => {
    dispatch(filterChange(value));
  };
  return (
    <>
      <Box textAlign="center" sx={{ color: 'green' }} as="p">
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
