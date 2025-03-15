import { useEffect, useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

function ThemeToggler() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme]);

  return (
    <button onClick={themeToggler} className={`btn ${theme === 'light' ? 'text-warning' : 'text-primary'}`}>
      {theme === 'light' ? <IoMdSunny /> : <IoMdMoon />}
    </button>
  );
}

export default ThemeToggler;
