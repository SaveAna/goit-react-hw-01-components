import styled from '@emotion/styled';

export const StatisticsContainer = styled.section`
  max-width: 500px;
  text-align: center;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--primary-white);
  margin-top: 60px;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(237, 237, 237, 1);
  -moz-box-shadow: 0px 0px 2px 0px rgba(237, 237, 237, 1);
  box-shadow: 0px 0px 2px 0px rgba(237, 237, 237, 1);
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  color: var(--profile-text-grey);
  padding: 30px;
  font-weight: 600;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatItem = styled.li`
  background-color: ${props => getRandomHexColor()};
  width: 100%;
  padding: 16px 22px;
  font-size: 18px;
  color: var(--primary-white);
`;

export const StatNumbers = styled.span`
  display: block;
  font-size: 21px;
  margin-top: 8px;
`;
