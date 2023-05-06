import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background: rgb(100 116 139);

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    border: none;
    width: 70%;
    height: 10%;
    border-radius: 5px;
    margin: auto;
  }
  > button:hover {
    background: rgb(148 163 184);
  }

  p {
  }
`;
