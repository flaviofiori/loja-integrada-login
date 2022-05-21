import styled from 'styled-components';

export const Title = styled.legend`
  color: ${({ theme }) => theme.palette.text};
  font-size: 1.75rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;