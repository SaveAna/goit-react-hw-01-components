import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  max-width: 400px;
  text-align: center;
  color: var(--profile-text-grey);
  border-radius: 7px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--primary-white);
  -webkit-box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
  -moz-box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
  box-shadow: 0px 0px 4px 2px rgba(212, 212, 212, 1);
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  padding: 40px;
  font-size: 20px;
`;

export const ProfilePhoto = styled.img`
  border-radius: 50%;
  margin: 0px auto;
  object-fit: cover;
  object-position: center;
  width: 170px;
  height: 170px;
  background-color: var(--profile-bg-grey);
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

export const StatsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const StatsItem = styled.li`
  background-color: var(--profile-bg-grey);
  width: 100%;
  padding: 30px 28px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid var(--transaction-separators);
`;

export const StatsNumbers = styled.span`
  display: block;
  font-size: 21px;
  font-weight: 700;
  color: var(--primary-black);
  margin-top: 8px;
`;
