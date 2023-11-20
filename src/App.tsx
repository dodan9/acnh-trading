import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styled from "@emotion/styled";
import "@src/lang/i18next";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnWindowFocus: true,
        gcTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Container>{mainRoutes()}</Container>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;

const Container = styled.div`
  padding: 20px;
`;
