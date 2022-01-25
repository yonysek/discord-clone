import {
  MdDarkMode,
  MdLightMode,
  MdSearch,
  MdInbox,
  MdHelpOutline,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";

export default function TopNav() {
  return (
    <div className="topnav">
      <DarkModeSwitch />
      <div className="topnav-input ">
        <input
          type="text"
          className="bg-transparent focus:outline-none"
          placeholder="Search..."
        />
        <MdSearch
          size="24"
          className="dark:text-gray-500 topnav-icon hover:text-gray-700 dark:hover:text-gray-700"
        />
      </div>
      <MdInbox size="24" className="topnav-icon" />
      <MdHelpOutline size="24" className=" topnav-icon" />
    </div>
  );
}

const DarkModeSwitch = () => {
  const { changeMode, mode } = useDarkMode();

  const clickHandler = () => {
    changeMode();
  };

  return (
    <AnimatePresence>
      <motion.div
        whileTap={{
          rotate: 180,
          scale: 1.5,
        }}
        onClick={clickHandler}
      >
        {mode === "light" ? (
          <MdDarkMode size="24" className="topnav-icon" />
        ) : (
          <MdLightMode size="24" className="topnav-icon" />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
