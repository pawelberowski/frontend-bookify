import { Box, IconButton, Paper, styled } from "@mui/material";

export const VenueTileContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 228px;
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  color: white;
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
  border-radius: 0 0 8px 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const NameContainer = styled(Box)`
  display: flex;
  min-width: 154px;
  max-width: 200px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0 18px;
  background: rgba(0, 0, 0, 0.5);
  text-align: end;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  font-weight: 600;
  letter-spacing: 0.48px;
`;

export const ArrowIcon = styled(IconButton)`
  width: 40px;
  height: 40px;
`;

export const PriceAndLocation = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 140px;
  padding: 6px;
  height: 70px;
  border-radius: 0 18px 0 0;
  background: rgba(0, 0, 0, 0.6);
`;

export const Price = styled("p")`
  font-weight: 600;
  letter-spacing: 0.48px;
`;

export const LocationWrapper = styled("p")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.36px;
  white-space: nowrap;
`;

export const RatingAndCapacityContainer = styled(Paper)`
  display: flex;
  justify-content: space-around;
  width: 282px;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0;
  color: #595959;
`;

export const RatingAndCapacityWrapper = styled("span")`
  display: flex;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
