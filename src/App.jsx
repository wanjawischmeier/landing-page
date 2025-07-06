import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./widgets/Header";
import MastodonTimelineWidget from "./widgets/MastodonTimelineWidget";
import GridView from "./widgets/GridView";
import AboutUs from "./widgets/AboutUs";
import cards from "./Cards";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-dark-bg text-dark-text">
        <Header />
        <div className="flex flex-1 h-0">
          <div className="flex-1 flex items-center justify-center p-12 bg-dark-bg">
            <Routes>
              <Route path="/" element={<GridView title="Projekte" cards={cards} bgColor="bg-dark-grid" />} />
              <Route path="/projects" element={<GridView title="Projekte" cards={cards} bgColor="bg-dark-grid" />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <div className="h-full min-w-[200px] w-[max(30vw,250px)] bg-dark-grid flex flex-col">
            <h2 className="text-2xl font-bold mb-4 pl-6 pt-12 text-dark-text">Neuerungen</h2>
            <MastodonTimelineWidget />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
