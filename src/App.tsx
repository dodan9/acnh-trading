import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@src/lang/i18next";
import { Suspense } from "react";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import { lazy } from "react";
const Console = lazy(() => import("@src/pages/console/pages"));
const Client = lazy(() => import("@src/pages/client"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        refetchOnWindowFocus: true,
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 10,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<Client />} />
              <Route path="/console/*" element={<Console />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
    </>
  );
}

export default App;
