import {
  Box,
  Button,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import heroImageUrl from "/src/shared/assets/hero.svg";

export const FilterContainerStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 524px;
  background-image: url(${heroImageUrl});
  background-size: cover, cover;
`;

export const FilterElementsContainer = styled(Box)`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Motto = styled((props: TypographyProps) => (
  <Typography {...props} variant={"h2"} />
))`
  align-self: end;
  margin-right: 103px; //TODO: repair with theme/spacing
`;

export const FiltersBarWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltersBar = styled(Box)`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export const FilterWrapper = styled(Box)`
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
