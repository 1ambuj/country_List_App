import React, { useEffect, useState } from "react"
import { nanoid } from 'nanoid';
import SearchFilter from "./SearchFilter";
export default function CountryCard(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
       fetch("https://restcountries.com/v3.1/all")
       .then(res => res.json())
       .then(data => setData(data))
       setLoading(false)
    },[])
  const renderData = data?.map((data)=>{
  
    return (
            <div className="w-fit flex flex-col justifu-center items-center p-2" key={nanoid()}>
                    <img src={data.flags.png} alt="country flags" className="w-[200px] h-[130px] rounded-t-sm"/>
                    <div className="bg-white p-5 rounded-b-[3px] w-[200px] ">
                       <h3 className="font-bold mb-2">{data.name.common}</h3> 
                       <p className="text-sm text-gray-400"><span className="font-medium text-black   text-sm">Population :</span> {data.population}</p>
                       <p className="text-sm text-gray-400"><span className="font-medium text-black   text-sm">Region : </span> {data.region}</p>
                       <p className="text-sm text-gray-400 pb-4"><span className="font-medium text-black  text-sm">Capital : </span> {data.capital}</p>
                    </div>
             </div> 
    )
  }) 
 if(loading){
    <h2>Loading...</h2>
 }
  return (
    <>
     <SearchFilter />
     <div className="flex flex-wrap justify-around  items-center px-4 overflow-hidden w-full ">
        {renderData}
     </div>
    </>
  )
}