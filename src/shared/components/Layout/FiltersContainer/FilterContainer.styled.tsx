import { Box, Button, styled, Typography } from "@mui/material";
import heroImageUrl from "/src/shared/assets/hero.svg";
import mobileHeroImageUrl from "/src/shared/assets/hero-mobile.svg";

export const FilterContainerStyled = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 524px;
  background-image: url(${heroImageUrl});
  background-size: cover, cover;
  ${theme.breakpoints.down("md")} {
    background-image: url(${mobileHeroImageUrl});
  }
`,
);

export const EmptyBox = styled(Box)(
  ({ theme }) => `
  min-height: ${theme.spacing(10)};
`,
);

export const Motto = styled(Typography)(
  ({ theme }) => `
  align-self: end;
  margin-right: ${theme.spacing(25)};
  ${theme.breakpoints.down("md")} {
    font-size: 25px;
    font-weight: 500;
    margin: ${theme.spacing(2)};
  }
`,
);

export const SearchButton = styled(Button)(
  ({ theme }) => `
  border-radius: 18px;
  color: ${theme.palette.customGrey.contrastText};
  text-transform: none;
  width: 220px;
  height: 40px;
`,
);
