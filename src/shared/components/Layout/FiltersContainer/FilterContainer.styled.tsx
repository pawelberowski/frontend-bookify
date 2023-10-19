import { Button, styled } from "@mui/material";
import heroImageUrl from "/src/shared/assets/hero.svg";

export const FilterContainerStyled = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 524px;
  background-image: url(${heroImageUrl});
  background-size: cover, cover;
`;

export const FilterElementsContainer = styled("div")`
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Motto = styled("p")`
  color: rgba(0, 0, 0, 0.75);
  font-family: Prompt, sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 300;
  align-self: end;
  margin-right: 103px; //TODO: repair with theme/spacing
`;

export const FiltersBarWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltersBar = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 100vw;
`;
export const FilterWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 18px;
  width: 160px;
  height: 40px;
`;

export const StyledInput = styled("input")`
  border: none;
  width: 100px;
`;

export const SearchButton = styled(Button)`
  border-radius: 18px;
`;
