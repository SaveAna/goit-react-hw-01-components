import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 520px;
  text-align: center;
  color: var(--profile-text-grey);
  border-radius: 7px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--primary-white);
  -webkit-box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
  -moz-box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
  box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
`;

export const InfoContainer = styled.div`
  padding: 40px;
  font-size: 20px;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  margin: 0px auto;
  object-fit: cover;
  object-position: center center;
  width: 200px;
  height: 200px;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: var(--primary-black);
  margin-top: 40px;
`;

export const InfoText = styled.p`
  margin-top: 12px;
`;
