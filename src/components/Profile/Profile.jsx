import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfilePhoto,
  InfoContainer,
  UserName,
  InfoText,
  StatsContainer,
  StatsItem,
  StatsNumbers,
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

      <StatsContainer>
        <StatsItem>
          <span>Followers</span>
          <StatsNumbers className="quantity">{stats.followers}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsNumbers className="quantity">{stats.views}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsNumbers className="quantity">{stats.likes}</StatsNumbers>
        </StatsItem>
      </StatsContainer>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
