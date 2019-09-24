import React, { Suspense } from "react";
import Header from "./components/Header";

const OptimizedHeader = React.memo(Header);
const LongMoviesList = React.lazy(() => import("./components/List"));

const App = () => {
  return (
    <>
      <OptimizedHeader text="Movies collection" />
      <Suspense fallback={<div>Loading...</div>}>
        <LongMoviesList movies={[{ id: 1, title: "Joker", description: "It's a gritty character study of Arthur Fleck, a man disregarded by society, and a broader cautionary tale." }]} />
      </Suspense>
    </>
  );
};

export default App;
