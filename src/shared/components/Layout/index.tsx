import { FC, PropsWithChildren } from "react";
import { Header } from "./Header/Header.tsx";
import {
  ContentContainer,
  HeaderAndContentContainer,
  LayoutContainer,
} from "./Layout.styled.tsx";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderAndContentContainer>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </HeaderAndContentContainer>
    </LayoutContainer>
  );
};
