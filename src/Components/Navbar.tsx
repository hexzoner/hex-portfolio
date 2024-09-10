import { NavLink } from "react-router-dom";
// import ThemesSwap from "./ThemesSwap.tsx";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `btn btn-ghost text-lg  + ${isActive ? "underline underline-offset-4 text-primary" : ""} `;

  const htmlElement = document.querySelector("html");
  if (htmlElement) htmlElement.setAttribute("data-theme", "dim");

  return (
    <div className="bg-base-300 ">
      <div className="navbar max-w-screen-xl m-auto">
        <div className="flex-1">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About Me
          </NavLink>
          {/* <button title="Settings" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
            </svg>
          </button> */}
        </div>
        <div className="flex-none">
          <LanguageToggle />
        </div>
      </div>
    </div>
  );
}
