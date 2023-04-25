import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfilePhoto,
  InfoContainer,
  UserName,
  InfoText,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <InfoContainer>
        <ProfilePhoto src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <InfoText>@{tag}</InfoText>
        <InfoText>{location}</InfoText>
      </InfoContainer>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Profile;
