import { List, ListItem, styled, Typography } from "@mui/material";

export const StyledList = styled(List)`
  margin-bottom: ${({ theme }) => theme.spacing(20)};
`;

export const StyledListItem = styled(ListItem)`
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const EmailWrapper = styled(Typography)`
  line-break: anywhere;
`;
