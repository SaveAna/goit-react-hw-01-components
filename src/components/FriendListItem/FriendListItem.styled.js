import styled from '@emotion/styled';

export const FriendCard = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  background-color: var(--primary-white);
  border-radius: 3px;
  padding: 10px 15px;
  gap: 15px;
  width: 270px;
  -webkit-box-shadow: 0px 1px 3px 1px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 1px 3px 1px rgba(168, 168, 168, 1);
  box-shadow: 0px 1px 3px 1px rgba(168, 168, 168, 1);
`;

export const Status = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
`;

export const FriendPhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 7px;
  background-color: var(--page-bg);
`;
