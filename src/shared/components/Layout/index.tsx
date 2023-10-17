import { FunctionComponent, PropsWithChildren } from "react";
import { Header } from "./Header";
import {
  ContentContainer,
  FiltersAndContentContainer,
  LayoutContainer,
} from "./Layout.styled.tsx";
import { FiltersContainer } from "./FiltersContainer";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <FiltersAndContentContainer>
        <FiltersContainer />
        <ContentContainer>{children}</ContentContainer>
      </FiltersAndContentContainer>
    </LayoutContainer>
  );
};
