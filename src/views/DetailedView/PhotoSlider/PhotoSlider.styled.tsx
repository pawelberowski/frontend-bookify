import { Box, IconButton, styled } from "@mui/material";

interface PhotoSliderContainer {
  imgUrl: string;
}

export const PhotoSliderContainer = styled("div")<PhotoSliderContainer>`
  min-height: 200px;
  background-image: ${(props) => `url(${props.imgUrl})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FavouriteIconContainer = styled(Box)`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
`;

export const FavouriteIconWrapper = styled(Box)`
  display: flex;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 8px 0;
`;

export const RowContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
`;

export const ArrowIconWrapper = styled(IconButton)`
  width: 40px;
  height: 40px;
`;
