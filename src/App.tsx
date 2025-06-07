import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router";
import LoadingSpinner from "./common/components/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";
import OAuthCallback from "./pages/OAuthCallbabck";
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchPageWithKeyword = React.lazy(
  () => import("./pages/SearchPage/SearchPageWithKeyword")
);
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistDetailPage")
);
const PlaylistPage = React.lazy(() => import("./pages/PlaylistPage/PlaylistPage"));

//Route plan summary
//1. sidebar (playlist, menu)
//2. homepage "/"
//3. search page "/search"
//4. search result page "/search/:keyword"
//5. playlist detail page "/playlist/:id"
//6. (mobile) playlist "/playlist"

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  let codeVerifier = localStorage.getItem("code_verifier");
  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });
    }
  }, [code, codeVerifier, exchangeToken]);
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/callback" element={<OAuthCallback />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:keyword" element={<SearchPageWithKeyword />} />
          <Route path="/playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="/playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
