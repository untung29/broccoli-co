import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import Home from "./pages/home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import mantineTheme from "./theme";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={mantineTheme}>
        <Home></Home>
        <Notifications />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
