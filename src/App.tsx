import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import Home from "./pages/home/Home";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Home></Home>
    </MantineProvider>
  );
}

export default App;
