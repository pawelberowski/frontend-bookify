import { ImageList, styled } from "@mui/material";

export const StyledImageList = styled(ImageList)(
  ({ theme }) => `
    padding: 0 ${theme.spacing(8)} 0 ${theme.spacing(8)};
  `,
);
