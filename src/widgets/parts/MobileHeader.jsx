import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function MobileHeader({ navLinks, rootUrl, appName, imageSrc }) {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    // Filter for mobile links
    const filteredLinks = navLinks.filter(
        (link) => !link.display || link.display === "both" || link.display === "mobile"
    );

    return (
        <header className="flex items-center justify-between h-[65px] px-4 bg-dark-card border-b border-dark-grid shadow-sm relative z-50">
            <Link
                to={rootUrl}
                className="flex items-center gap-3 px-3 py-2 transition group focus:outline-none"
            >
                <img src={imageSrc} alt="Logo" className="w-12 h-12 rounded-md" />
                <span className="font-bold text-xl text-dark-text group-hover:text-primary-500 transition relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full">
                    {appName}
                </span>
            </Link>
            <button
                className="flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-dark-grid transition"
                aria-label="Open navigation menu"
                onClick={() => setOpen((v) => !v)}
            >
                <span className="w-6 h-0.5 bg-dark-text mb-1 rounded transition-all duration-200"></span>
                <span className="w-6 h-0.5 bg-dark-text mb-1 rounded transition-all duration-200"></span>
                <span className="w-6 h-0.5 bg-dark-text rounded transition-all duration-200"></span>
            </button>
            {/* Overlay for closing menu */}
            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Animated mobile menu: always rendered, animation controlled by classes */}
            <div
                className={`
    absolute top-full left-0 w-full bg-dark-card border-b border-dark-grid shadow-lg
    transition-all duration-300 origin-top
    ${open ? "max-h-[400px] opacity-100 scale-y-100 pointer-events-auto" : "max-h-0 opacity-0 scale-y-95 pointer-events-none"}
    overflow-hidden z-50
  `}
            >
                <nav className="flex flex-col">
                    {filteredLinks.map((link) =>
                        link.to ? (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={`px-6 py-4 text-base font-medium text-dark-text border-t border-dark-grid transition hover:text-primary-500
            ${location.pathname === link.to ? "text-primary-500" : ""}`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="px-6 py-4 text-base font-medium text-dark-text border-t border-dark-grid transition hover:text-primary-500"
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </nav>
            </div>
        </header>
    );
}