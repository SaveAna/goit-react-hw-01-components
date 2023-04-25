import PropTypes from 'prop-types';
import { Status, FriendCard, FriendPhoto } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <Status
        style={{ backgroundColor: isOnline ? '#46b24a' : '#ff4e55' }}
      ></Status>
      <FriendPhoto src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
