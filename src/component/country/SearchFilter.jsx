import { useContext, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
export default function SearchFilter({ handleChange, setData }) {
 
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState(null);
  const navigate = useNavigate()
  function toggle() {
    setOpen(prev => !prev);
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region ? region : "asia"}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [region, setData]);

  function handleRegionChange(selectedRegion) {
    setRegion(selectedRegion);
    setOpen(false);

  }
  function Clear(){
    navigate("/")
  }
  const {isDark} = useContext(ThemeContext)

  return (
  
    <div className={`flex items-start pt-5 justify-between ${isDark? "bg-gray-900": ""}`}>
      <div className={`flex justify-between px-8 relative ${isDark? "bg-[hsl(200, 15%, 8%)]": ""} `}>
        <IoIosSearch className={`absolute bottom-10 mx-2 ${isDark? " text-white" :""}`} />
        <input
          type="text"
          name="country"
          placeholder="Search for a country"
          className={`w-[350px] px-7 py-3 rounded-md mb-6 shadow-md border-none outline-none ${isDark ? "bg-gray-800 text-white" :""}`}
          onChange={handleChange}
        />
      </div>
      <div className="relative mr-8 $">
        <button
          className={`py-3 px-5 bg-white rounded-md shadow flex items-center w-[200px] mb-1 ${isDark ? "bg-gray-800 text-white":""}`}
          onClick={toggle}
        >
          Filter by Region
          {open ? <MdKeyboardArrowUp className="ml-2" /> : <MdKeyboardArrowDown className="ml-2" />}
        </button>
        {open && (
          <div className={`absolute top-12 w-[200px] bg-white shadow rounded-md  mr-8  ${isDark ? "bg-gray-800 text-white":""}`}>
            <ul className="p-2">
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("europe")}>Europe</button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("asia")}>Asia</button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("africa")}>Africa</button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("oceania")}>Oceania</button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("americas")}>Americas</button>
              </li>
              <li className="py-2 px-4 hover:bg-gray-200">
                <button onClick={() => handleRegionChange("americas")}>Americas</button>
              </li>
              <li>
                 <button onClick={Clear}  className="py-2 px-4 hover:bg-gray-200 bg-blue-500 w-full rounded">Clear Filter</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
