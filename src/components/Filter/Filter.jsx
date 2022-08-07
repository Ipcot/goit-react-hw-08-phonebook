import { Input } from './Filter.styled';
import { Box } from 'components/Box/Box.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filteredContactsList } from 'components/redux/slice';
import { getFilter } from 'components/redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
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
        onChange={e => dispatch(filteredContactsList(e.target.value))}
      ></Input>
    </>
  );
};
