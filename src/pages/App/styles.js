import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 30px;
  background: white;
`;

export const ColumnFirst = styled.div`
  background: linear-gradient(
    180deg,
    rgba(238, 225, 203, 1) 0%,
    rgba(228, 183, 106, 1) 100%
  );
  padding: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 530px;
`;

export const ContainerTwo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerSelectColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  border: 1px solid #dddddd;
  border-right: none;
  font-family: arial;
  border-spacing: 0px;
  width: 100%;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  border-left: none;
  border-bottom: none;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
  color: #666666;
`;

export const TdRed = styled.td`
  border: 1px solid #dddddd;
  border-left: none;
  border-bottom: none;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: red;
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  border-left: none;
  border-top: none;
  padding: 4px;
  border-bottom: none;
  color: red;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
`;

export const InputComponent = styled.input`
  background-color: #ddcaaa;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const ButtonComponent = styled.button`
  background-color: #ddddcc;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  padding: 10px;
  color: #222222;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
    color: #000000;
  }
`;

export const ButtonComponentReset = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin: 50px auto;
  background-color: #a1599f;
  padding: 10px;
  color: white;
  border-radius: 5px;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }
`;

export const Loading = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ComponentDetails = styled.div`
  background-color: #333333;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
