import { BrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import { Routing } from "./shared/components/Routing/Routing";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
