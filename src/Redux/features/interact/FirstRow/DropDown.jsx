import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { fetchpatient } from "./patientSlice";

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [patientData, setPatientData] = useState([]);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.session);
  const {
    dataList,
    status,
    status_dataSet,
    error,
    patientList,
    dataSet,
    dataName,
  } = useSelector((state) => {
    console.log("We are inside Form ");
    console.log(state);
    console.log(state.form.dataList);
    return state.form;
  });

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setDropdownOpen(false); // Close the dropdown when an item is selected
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    console.log(token, dataName);
    console.log("Hello this is Drop down");
    // setPatientData(

    console.log(patientData);
    const handleOutsideClick = (event) => {
      // Close the dropdown if the click is outside of it
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // useEffect(
  //   () => {},
  //   [

  //   ]
  // );

  console.log(selectedValue);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300"
      >
        Patient Options
      </button>

      {/* Dropdown content */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 60 }}
            exit={{ opacity: 0, y: -10, x: -30 }}
            transition={{ duration: 0.2 }}
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">
              {Object.entries(patientList).map(([id, value]) => (
                <a
                  key={id}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => handleSelectChange({ target: { value } })}
                >
                  {value}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDown;
