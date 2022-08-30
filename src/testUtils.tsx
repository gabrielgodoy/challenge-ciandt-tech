import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render as renderTl } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export * from "@testing-library/react";

export const render = (component: ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  const Providers = ({ children }: { children: ReactElement }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    );
  };

  return renderTl(component, { wrapper: Providers });
};
