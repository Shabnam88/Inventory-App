import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-secondary-300" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-secondary-300" />
      )}
    </button>
  );
}

export default DarkModeToggle;
