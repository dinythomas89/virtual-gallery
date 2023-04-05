import styled from "styled-components";

export const PaginationContainer = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 6px;
  }`;

export const PaginationList = styled.li<{ primary: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.primary === "active" ? "#fff" : "#00a8ff")};
  background: ${(props) => (props.primary === "active" ? "#00a8ff" : "#fff")};
  padding: 8px 10px;
  border: 1px solid #00a8ff;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    color: #fff;
    background: #00a8ff;
  }
`;
