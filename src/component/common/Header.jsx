import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../App";
import { useContext } from "react";
export default function Header(){
    const {isDark, toggle} = useContext(ThemeContext)
    return (
        <header className={`header flex justify-between items-center px-8 shadow-md h-[60px] ${isDark ?"bg-gray-800 text-white":""}`}>  
           <h3>Where in the world?</h3>
            <div onClick={toggle} className="flex justify-center items-center gap-3">
                {isDark?
                <MdDarkMode />:<MdOutlineDarkMode />}
                <p>{isDark? "Light":"Dark"}</p>  
            </div>
        </header>
    )
}