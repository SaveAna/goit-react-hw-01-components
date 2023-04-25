import PropTypes from 'prop-types';
const FriendList = ({ friends }) => {
  return <ul class="friend-list"></ul>;
};

FriendList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
