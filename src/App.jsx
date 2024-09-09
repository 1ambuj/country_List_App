
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import './App.css'

import CountryCard from './component/country/countryCrd'
import Layout from './component/common/Layout'
import CountryDetails from './component/country/CountryDetails'
import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext();
function App() {
 const [isDark, setIsDrak] = useState(false)
 function toggle(){
  setIsDrak(!isDark)
 }
 useEffect(() => {

  document.body.style.backgroundColor = isDark ? "#111827" : "";  

 
  return () => {
    document.body.style.backgroundColor = ""; 
  };
}, [isDark]);
  return (
   <BrowserRouter>
   <ThemeContext.Provider value={{isDark , toggle}}>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/countries" replace />} />
          <Route path="/countries" element={<CountryCard />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        
        </Route>
    </Routes>
    </ThemeContext.Provider>
   </BrowserRouter>
  )
}
export {ThemeContext}
export default App
