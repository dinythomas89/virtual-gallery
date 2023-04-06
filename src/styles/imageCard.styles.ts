import styled from "styled-components";

export const ImageCardContainer = styled.div`
  height: max-content;
  padding: 10px;
  margin: 2%;
  border: 1px solid #042626;
  background: #f1f1e6;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardText = styled.p`
  font-size: 1.2em;
`;

export const Button = styled.button<{ selected: boolean }>`
  width: 4em;
  margin: 4% 0;
  background: ${(props) => (props.selected ? "#0089AE" : "#E9F1F1")};
`;
