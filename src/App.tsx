import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";

const theme = createTheme({});

function App() {
  return <MantineProvider theme={theme}></MantineProvider>;
}

export default App;
