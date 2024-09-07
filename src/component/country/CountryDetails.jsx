import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom' 
import { FaArrowLeftLong } from "react-icons/fa6"
const CountryDetails = () => {
 const  [counryDetails, setCountryDetails] = useState(null)
 const param = useParams()
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
             <h2 className='font-bold text-black text-lg mr-4'>{item.name.common}</h2>
              <div className='flex gap-10'>
               <div>
                 <p>
                  <span className="text-black font-bold mr-4">Native Name :</span>{" "}
                  {item.name.nativeName && Object.values(item.name.nativeName)[0].common}
                  </p>
                  <p><span className="text-black font-bold mr-1">Population :</span> {item.population}</p>
                  <p><span className="text-black font-bold mr-1">Region :</span> {item.region}</p>
                  <p><span className="text-black font-bold mr-1">Sub Region :</span> {item.subregion }</p>
                  <p><span className="text-black font-bold mr-1">Capital:</span> {item.capital}</p>
               </div>
               <div>
               <p><span className="text-black font-bold mr-1">Top Level Domain:</span> {item.tld}</p>
               <p>
               <span className="text-black font-bold mr-1">Currencies:</span>
               {item.currencies && Object.keys(item.currencies).length > 0 && (
                  item.currencies[Object.keys(item.currencies)[0]].name
               )}
               </p>
               <p>
                  <span className="text-black font-bold mr-1">Languages:</span>
                  {item.languages && Object.values(item.languages).length > 0 ? (
                     Object.values(item.languages).join(", ")
                  ) : (
                     "None"
                  )}
                  </p>
               </div>
              </div>
              <p>
               <span className='text-black font-bold'>Borders countries:</span> 
               {item.borders && item.borders.length > 0 ? (
                  item.borders.map((border, index) => (
                     <span key={index} >
                     <button className='text-sm mx-2 px-4 py-1 rounded-sm shadow'>{border}</button>
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
   <>
     <div >
       <Link to=".." relative='path'>
       <div className='ml-[60px] px-5 py-[3px] border-[1px] border-[#ccc]-400 rounded-sm my-[60px] bg-white  shadow flex justify-start items-center w-[100px]'><span>
       <FaArrowLeftLong className='mr-1' /></span><button className=''> Back</button></div>
       </Link>
     </div>
     <div>
       {counryDetails? countryDetailsData:null}
    </div>
   </>
  )
}

export default CountryDetails