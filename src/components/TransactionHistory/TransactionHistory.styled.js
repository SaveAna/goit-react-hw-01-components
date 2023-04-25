import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin: 60px auto 0px;
  background-color: var(--transaction-separators);
  overflow: hidden;
  border-radius: 3px;
  width: 600px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(176, 176, 176, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(176, 176, 176, 1);
  box-shadow: 0px 3px 5px 0px rgba(176, 176, 176, 1);
  color: var(--trasaction-text-grey);
`;

export const TableTitle = styled.th`
  background-color: var(--transaction-bg-blue);
  color: var(--primary-white);
  text-transform: uppercase;
  padding: 10px 0px;
`;

export const TableRow = styled.tr`
  background-color: var(--primary-white);
  &:nth-child(even) {
    background-color: var(--transaction-bg-grey);
  }
`;

export const TableData = styled.td`
  padding: 10px 0px;
  text-transform: capitalize;
`;
