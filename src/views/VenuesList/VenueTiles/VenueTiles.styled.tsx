import { Box, Button, styled } from "@mui/material";

export const VenueTilesContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(2)};
`,
);

export const ShowAndSortContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SortButton = styled(Button)`
  text-transform: none;
`;

export const VenueTilesWrapper = styled(Box)(
  ({ theme }) => `
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing(2)};
  `,
);

export const PaginationWrapper = styled(Box)`
  display: flex;
  justify-content: center;
`;
