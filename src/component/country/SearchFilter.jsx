
import { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";

export default function SearchFilter({ handleChange, setData }) {
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState(null);
  const { isDark } = useContext(ThemeContext);  // Dark mode context
  const navigate = useNavigate();

  function toggle() {
    setOpen((prev) => !prev);
  }

  function handleRegionChange(selectedRegion) {
    setRegion(selectedRegion);
    setOpen(false);
  }
  useEffect(() => {
  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/region/${region ? region : "asia"}`);
    const data = await response.json();
    setData(data);
  };

  fetchData();
 }, [region, setData]);
  function clear() {
    navigate("/");
  }

  return (
    <div className={`flex items-start pt-5 justify-between ${isDark ? "bg-gray-900" : ""}`}>
     
      <div className="flex justify-between px-8 relative ">
        <IoIosSearch className={`absolute bottom-10 mx-2 ${isDark ? "text-white" : "text-black"}`} />
        <input
          type="text"
          placeholder="Search for a country"
          className={`w-[350px] px-7 py-3 rounded-md mb-6 shadow-md border-none outline-none ${isDark ? "bg-gray-800 text-white" : ""}`}
          onChange={handleChange}
        />
      </div>

      {/* Filter Button */}
      <div className="relative mr-8">
        <button
          className={`py-3 px-5 rounded-md shadow flex items-center w-[200px] mb-1 ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}
          onClick={toggle}
        >
          Filter by Region
          {open ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}
        </button>
        
        {/* Dropdown Menu */}
        {open && (
          <div className={`absolute top-12 w-[200px] shadow rounded-md ${isDark ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
            <ul className="p-2">
              {["Europe", "Asia", "Africa", "Oceania", "Americas"].map((region) => (
                <li key={region} className="py-2 px-4 hover:bg-gray-200">
                  <button onClick={() => handleRegionChange(region.toLowerCase())}>
                    {region}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={clear}
                  className="py-2 px-4 bg-blue-500 w-full rounded text-white"
                >
                  Clear Filter
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
