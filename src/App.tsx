import { BrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import { Routing } from "./shared/components/Routing/Routing";
import { ThemeProvider } from "@mui/material";
import {createBookifyTheme} from "./shared/utils/createBookifyTheme.ts";

const theme = createBookifyTheme();
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routing />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
