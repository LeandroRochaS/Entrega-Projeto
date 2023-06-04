import styled from 'styled-components';
export const ButtonContainer = styled.button`
  border: none;
  background: #303136;
  border-radius: 16px;
  padding: 17px 21px;
  flex: 1;
  color: #29A8FF;
  font-size: 18px;
  font-family: monospace;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.65;
  }
`;