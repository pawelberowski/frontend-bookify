import { Box, IconButton, Paper, styled } from "@mui/material";

export const VenueTileContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 228px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
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

export const RowContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const FavoriteContainer = styled(Box)`
  display: flex;
  width: 32px;
  height: 32px;
  padding: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0 0 8px 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const NameContainer = styled(Box)`
  display: flex;
  width: 164px;
  height: 32px;
  padding: 8px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0 0 0 18px;
  background: rgba(0, 0, 0, 0.5);
  text-align: end;
`;

export const LeftArrowIcon = styled(IconButton)`
  width: 40px;
  height: 40px;
`;

export const RightArrowIcon = styled(IconButton)`
  width: 40px;
  height: 40px;
`;

export const PriceAndLocation = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 140px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 0 18px 0 0;
  background: rgba(0, 0, 0, 0.6);
  align-self: flex-end;
`;

export const Price = styled("p")`
  margin: 0 0 0 0;
`;

export const Location = styled("p")`
  margin: 0 0 0 0;
  white-space: nowrap;
  float: left;
`;

export const RatingAndCapacity = styled(Paper)`
  width: 282px;
  height: 35px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: #fdfdfd;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25);
`;

export const Rating = styled("span")`
  display: inline-flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const Capacity = styled("span")`
  display: inline-flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;
