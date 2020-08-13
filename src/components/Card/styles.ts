import styled from "styled-components";
import { theme } from "../../theme/theme";

type CardListItemType = {
  selected: boolean;
};
export const CardContainer = styled.article`
  padding: 24px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  min-width: 320px;
  max-width: 385px;

  @media (min-width: 576px) {
    max-width: 465px;
  }
  @media (min-width: 992px) {
    padding: 24px 35px;
  }
`;

export const CardListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  @media(min-width: 576px){
    margin 16px 0;
  }
  @media(min-width: 992px){
    margin 24px 0;
  }
`;

export const CardListItemRight = styled.p<CardListItemType>`
  color: ${({ selected }) => (selected ? "#000" : theme.grey)};
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
`;

export const CardListHead = styled(CardListItem)`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px auto;
  align-items: center;
`;
export const CardFooterText = styled.p`
  margin-right: 16px;
  font-size: 24px;
`;
