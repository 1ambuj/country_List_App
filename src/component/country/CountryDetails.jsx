import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom' 
import { FaArrowLeftLong } from "react-icons/fa6"
import { ThemeContext } from '../../App'
const CountryDetails = () => {
 const  [counryDetails, setCountryDetails] = useState(null)
 const param = useParams()
 const {isDark} = useContext(ThemeContext)
 useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/alpha?codes=${param.id}`)
    .then(res => res.json())
    .then(data => setCountryDetails(data))

 },[param.id])
 
 const countryDetailsData = counryDetails?.map((item)=>{

    return (
        <div key={param.id} className='mx-[60px] flex  text-gray-500 items-center gap-10 text-sm '>
            <img src={item.flags.png} alt={item.flags.alt} />
            <div className='flex flex-col gap-3'>
             <h2 className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>{item.name.common}</h2>
              <div className='flex gap-10'>
               <div>
                 <p>
                  <span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Native Name :</span>{" "}
                  {item.name.nativeName && Object.values(item.name.nativeName)[0].common}
                  </p>
                  <p><span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Population :</span> {item.population}</p>
                  <p><span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Region :</span> {item.region}</p>
                  <p><span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Sub Region :</span> {item.subregion }</p>
                  <p><span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Capital:</span> {item.capital}</p>
               </div>
               <div>
               <p><span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Top Level Domain:</span> {item.tld}</p>
               <p>
               <span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Currencies:</span>
               {item.currencies && Object.keys(item.currencies).length > 0 && (
                  item.currencies[Object.keys(item.currencies)[0]].name
               )}
               </p>
               <p>
                  <span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Languages:</span>
                  {item.languages && Object.values(item.languages).length > 0 ? (
                     Object.values(item.languages).join(", ")
                  ) : (
                     "None"
                  )}
                  </p>
               </div>
              </div>
              <p>
               <span className={`font-bold text-black text-lg mr-4 ${isDark? "text-white": "text-black"}`}>Borders countries:</span> 
               {item.borders && item.borders.length > 0 ? (
                  item.borders.map((border, index) => (
                     <span key={index} >
                     <button className={`text-sm mx-2 px-4 py-1 rounded-sm shadow ${isDark? "bg-gray-800":""}`}>{border}</button>
                     </span>
                  ))
               ) : (
                  "None"  
               )}
               </p>
            </div>
        </div>
    )
 })
  return (
   <div className={`w-[100vw] h-[90vh] ${isDark? "bg-gray-900 ": ""}`}>
     <div className='pt-[70px]' >
       <Link to=".." relative='path'>
       <div className='ml-[60px] px-5 py-[3px] border-[1px] border-[#ccc]-400 rounded-sm  bg-white  shadow flex justify-start items-center w-[100px]'><span>
       <FaArrowLeftLong className='mr-1' /></span><button className=''> Back</button></div>
       </Link>
     </div>
     <div className='my-7'>
       {counryDetails? countryDetailsData:null}
    </div>
   </div>
  )
}

export default CountryDetails