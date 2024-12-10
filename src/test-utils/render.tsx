import { render as testingLibraryRender } from "@testing-library/react";
import {
  createTheme,
  MantineProvider,
  mergeThemeOverrides,
  Modal,
} from "@mantine/core";
import mantineTheme from "../theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function render(ui: React.ReactNode) {
  const queryClient = new QueryClient();

  // Merge your project theme with tests specific overrides
  const testTheme = mergeThemeOverrides(
    mantineTheme,
    createTheme({
      components: {
        Modal: Modal.extend({
          defaultProps: {
            transitionProps: { duration: 0 },
          },
        }),
      },
    })
  );

  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={testTheme}>{children}</MantineProvider>
      </QueryClientProvider>
    ),
  });
}
