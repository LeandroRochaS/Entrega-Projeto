import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24px;
  font-family: monospace;

  input {
    width: 100%;
    height: 100%;
    padding: 0 50px;
    background: linear-gradient(191.34deg, #17181A -4.95%, #17181A 103.74%);
    border: none;
    border-radius: 12px;
    text-align: right;
    font-size: 35px;
    color: white;
    outline: none;

    /* Estilo dos números */
    font-variant-numeric: tabular-nums;

    /* Sombra no texto */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
