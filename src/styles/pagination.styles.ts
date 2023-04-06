import styled from "styled-components";

export const PaginationContainer = styled.ul`
display: flex;
  justify-content: center;
  align-items: center;
  margin: 4% 0;
  gap: 6px;
  }`;

export const PaginationList = styled.li<{ primary: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.primary === "active" ? "#F1F1E6" : "#006685")};
  background: ${(props) =>
    props.primary === "active" ? "#006685" : "#F1F1E6"};
  padding: 8px 10px;
  border: 1px solid #006685;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  list-style-type: none;

  &:hover {
    color: #f1f1e6;
    background: #006685;
  }
`;
