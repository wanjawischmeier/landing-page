import { Link, useLocation } from "react-router-dom";

export function DesktopHeader({ navLinks, rootUrl, appName, imageSrc }) {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between h-[75px] px-8 bg-dark-card border-b border-dark-grid shadow-sm">
      <Link
        to={rootUrl}
        className="flex items-center gap-3 px-3 py-2 transition group focus:outline-none"
      >
        <img src={imageSrc} alt="Logo" className="w-12 h-12 rounded-md" />
        <span className="font-bold text-xl text-dark-text group-hover:text-primary-500 transition relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full">
          {appName}
        </span>
      </Link>
      <nav className="flex items-center gap-8">
        {navLinks.map((link) =>
          link.to ? (
            <Link
              key={link.label}
              to={link.to}
              className={`text-placeholder text-base font-medium relative transition hover:text-primary-500 after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full
                ${location.pathname === link.to ? "text-primary-500" : ""}`}
              style={{ paddingBottom: "2px" }}
            >
              {link.label}
            </Link>
          ) : (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-placeholder text-base font-medium relative transition hover:text-primary-500 after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
              style={{ paddingBottom: "2px" }}
            >
              {link.label}
            </a>
          )
        )}
      </nav>
    </header>
  );
}
