
import { BrowserRouter, Routes,Route,Navigate } from 'react-router-dom'
import './App.css'

import CountryCard from './component/country/countryCrd'
import Layout from './component/common/Layout'
import CountryDetails from './component/country/CountryDetails'

function App() {


  return (
   <BrowserRouter>
     <Routes>
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Navigate to="/countries" replace />} />
    <Route path="/countries" element={<CountryCard />} />
    <Route path="/countries/:id" element={<CountryDetails />} />
  </Route>
</Routes>
   </BrowserRouter>
  )
}

export default App
