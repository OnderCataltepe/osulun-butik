// MuI
import Stack from '@mui/material/Stack';
// Components
import SearchModal from './SearchModal';
import Bag from './Bag';
import Account from './Account';

interface NProps {
  color: string;
}
const NavIcons = ({ color }: NProps): JSX.Element => {
  return (
    <Stack direction="row" spacing={1}>
      <SearchModal color={color} />
      <Account color={color} />
      <Bag color={color} />
    </Stack>
  );
};

export default NavIcons;
