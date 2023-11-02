import { FunctionComponent, PropsWithChildren } from "react";
import { Header } from "./Header";
import {
  ContentContainer,
  FiltersAndContentContainer,
  LayoutContainer,
} from "./Layout.styled.tsx";
import { FiltersContainer } from "./FiltersContainer";
import { useExchangeRateFetching } from "../../ExchangeRateContext/useExchangeRateFetching.tsx";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  useExchangeRateFetching();

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
