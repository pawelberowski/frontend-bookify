import { BrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import { Routing } from "./shared/components/Routing/Routing";
import { ThemeProvider } from "@mui/material";
import { createBookifyTheme } from "./shared/utils/createBookifyTheme.ts";
import { useExchangeRateContextValue } from "./shared/ExchangeRateContext/useExchangeRateContextValue.tsx";
import { ExchangeRateContext } from "./shared/ExchangeRateContext/ExchangeRateContext.tsx";

const theme = createBookifyTheme();
function App() {
  const exchangeRateContextValue = useExchangeRateContextValue();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ExchangeRateContext.Provider value={exchangeRateContextValue}>
          <Layout>
            <Routing />
          </Layout>
        </ExchangeRateContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
