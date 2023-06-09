import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 60vh;
  background: #009099;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HeaderTag = styled.h2`
  padding: 5%;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;
