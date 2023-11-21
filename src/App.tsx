import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { mainRoutes } from "./routes/mainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@src/lang/i18next";
import { Container } from "./styled";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
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
