import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #A0D7FF;

`;

export const Content = styled.div`
  background: linear-gradient(191.34deg, #17181A -4.95%, #17181A 103.74%);
  width: 90%;
  height: 90vh;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 40px;


  @media (min-width: 650px) {
    width: 60%;
  }

  @media (min-width: 750px) {
    width: 50%;
  }
`;

export const Row = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 34px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Column = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

`;

