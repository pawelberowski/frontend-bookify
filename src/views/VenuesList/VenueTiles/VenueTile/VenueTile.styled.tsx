import { Box, IconButton, Paper, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const VenueTileContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 228px;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    return props.theme.palette.customGrey.contrastText;
  }};
`;

interface SlidePhotosContainer {
  imgUrl: string;
}
export const SlidePhotosContainer = styled("div")<SlidePhotosContainer>`
  width: 282px;
  height: 193px;
  background-image: ${(props) => `url(${props.imgUrl})`};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const RowContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FavoriteContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  width: 32px;
  height: 32px;
  padding: ${theme.spacing(2)};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 8px 0;
  background: ${theme.palette.customGrey.main};
`,
);

export const NameContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  min-width: 154px;
  max-width: 200px;
  padding: ${theme.spacing(2)};
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0 18px;
  background: ${theme.palette.customGrey.light};
  text-align: end;
  text-shadow: 0 2px 4px ${theme.palette.customGrey.main};
`,
);

export const ArrowIcon = styled(IconButton)`
  width: 40px;
  height: 40px;
`;

export const PriceAndLocation = styled(Box)(
  ({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 140px;
  padding: ${theme.spacing(2)};
  height: 70px;
  border-radius: 0 18px 0 0;
  background: ${theme.palette.customGrey.main};
`,
);

export const LocationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;

export const RatingAndCapacityContainer = styled(Paper)(
  ({ theme }) => `
  display: flex;
  justify-content: space-around;
  width: 282px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: ${theme.palette.customGrey.lighter};
  border-radius: 0;
  color: #595959;
`,
);

export const RatingAndCapacityWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(2)};
`,
);

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
