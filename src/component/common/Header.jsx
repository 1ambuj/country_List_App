import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../App";
import { useContext } from "react";
export default function Header(){
    const {isDark, toggle} = useContext(ThemeContext)
    return (
        <header className={`header shadow-md h-[60px] ${isDark ?"bg-gray-800 text-white":""}`}>  
          <div className="flex justify-between items-center h-full mx-5 pr-3">
          <h3>Where in the world?</h3>
            <div onClick={toggle} className="flex justify-center items-center gap-3">
                {isDark?
                <MdDarkMode />:<MdOutlineDarkMode />}
                <p>{isDark? "Light":"Dark"}</p>  
            </div>
          </div>
        </header>
    )
}