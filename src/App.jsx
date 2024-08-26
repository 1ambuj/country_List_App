
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'

import CountryCard from './component/country/countryCrd'
import Layout from './component/common/Layout'

function App() {


  return (
   <BrowserRouter>
     <Routes>
       <Route element={<Layout />}>
       <Route path="/countries" element={<CountryCard />}/>
       </Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App
