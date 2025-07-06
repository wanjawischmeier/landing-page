import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./widgets/Header";
import MastodonTimelineWidget from "./widgets/MastodonTimelineWidget";
import GridView from "./widgets/GridView";
import AboutUs from "./widgets/AboutUs";
import cards from "./cards";
import navLinks from "./navLinks";
import "./tortoiseBackground.css";

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
      <div className="flex flex-col h-screen w-screen overflow-hidden svg-bg text-dark-text" >
        <Header
          navLinks={navLinks}
          rootUrl={ROOT_URL}
          appName={APP_NAME}
          imageSrc={IMAGE_SRC}
          mode={mode}
        />
        <div className="flex flex-1 h-0">
          <div
            className={mode === "mobile"
              ? "flex-1 flex items-center justify-center"
              : "flex-1 flex items-center justify-center p-8"
            }
          >
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
            {/* SVG background credit */}
            <div className="absolute bottom-2 left-2 text-placeholder text-xs opacity-70 select-none pointer-events-auto">
              <a
                href="https://svgbackgrounds.com/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
              >
                @svgbackgrounds.com
              </a>
            </div>
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
