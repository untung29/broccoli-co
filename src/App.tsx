import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import Header from "./components/Header/Header";

const theme = createTheme({});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Header></Header>
    </MantineProvider>
  );
}

export default App;
