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
  margin-right: ${({ theme }) => theme.spacing(25)};
`;

export const SearchButton = styled(Button)(
  ({ theme }) => `
  border-radius: 18px;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
  width: 220px;
  height: 40px;
`,
);
