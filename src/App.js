import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovies from "./pages/DetailMovies/DetailMovie";
import HomeMovie from "./pages/Home/HomeMovie";
import Person from "./pages/Person/Person";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMovie />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="/search/:q" element={<Search />} />
        <Route path="/detail/:id" element={<DetailMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
