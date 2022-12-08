import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Search from "pages/Search";
import Watch from "pages/Watch";
import Sidebar from "components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
