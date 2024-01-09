import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@src/commons/util/lang/i18next";
import { Suspense } from "react";
import LoadingSpinner from "./commons/components/loading/LoadingSpinner";
import { lazy } from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "./commons/styled/globalStyled";
import ScrollToTop from "./commons/util/ScrollToTop";
const Console = lazy(() => import("@src/features/console/pages"));
const Client = lazy(() => import("@src/features/client"));

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
        <Global styles={globalStyle} />
        <Suspense fallback={<LoadingSpinner />}>
          <BrowserRouter>
            <ScrollToTop />
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
