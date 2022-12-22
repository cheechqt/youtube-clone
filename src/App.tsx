import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Search from "pages/Search";
import Watch from "pages/Watch";
import Sidebar from "components/Sidebar";
import Navbar from "components/Navbar";

function App() {
  return (
    <div>
      <Sidebar />
      <div className="overflow-hidden height-screen">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
