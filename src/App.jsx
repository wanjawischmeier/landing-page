import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./widgets/Header";
import MastodonTimelineWidget from "./widgets/MastodonTimelineWidget";
import GridView from "./widgets/GridView";
import AboutUs from "./widgets/AboutUs";
import cards from "./cards";
import navLinks from "./navLinks";

const ROOT_URL = "/";
const APP_NAME = "aktivistek";
const IMAGE_SRC = "https://wiki.aktivismus.org/uploads/images/system/2025-01/ADAFfZfZxlqEIjUz-b1gszpl3weynbzov-36b973bd-9f24-4286-a26d-fe01a10d7f94.jpeg";

function App() {
  const [mode, setMode] = useState(
    window.innerWidth < 1000 ? "mobile" : "desktop"
  );

  useEffect(() => {
    const handleResize = () => {
      setMode(window.innerWidth < 1000 ? "mobile" : "desktop");
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div className="flex flex-col h-screen w-screen overflow-hidden bg-dark-bg text-dark-text">
        <Header
          navLinks={navLinks}
          rootUrl={ROOT_URL}
          appName={APP_NAME}
          imageSrc={IMAGE_SRC}
          mode={mode}
        />
        <div className="flex flex-1 h-0">
          <div className={mode === "mobile" ? (
            "flex-1 flex items-center justify-center bg-dark-bg"
          ) : (
            "flex-1 flex items-center justify-center p-8 bg-dark-bg"
          )}>
            <Routes>
              <Route
                path="/"
                element={
                  <GridView
                    title="Projekte"
                    cards={cards}
                    bgColor="bg-dark-grid"
                    mode={mode}
                  />
                }
              />
              <Route
                path="/projects"
                element={
                  <GridView
                    title="Projekte"
                    cards={cards}
                    bgColor="bg-dark-grid"
                    mode={mode}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutUs mode={mode} />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          {/* Side panel only on desktop */}
          {mode === "desktop" && (
            <div className="h-full min-w-[200px] w-[max(30vw,250px)] bg-dark-grid flex flex-col">
              <h2 className="text-2xl font-bold mb-4 pl-6 pt-12 text-dark-text">
                Neuerungen
              </h2>
              <MastodonTimelineWidget />
            </div>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
