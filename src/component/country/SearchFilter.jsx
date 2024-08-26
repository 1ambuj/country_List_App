import React from "react"
export default function SearchFilter(){
    return (
        <div className="flex justify-between px-8">
            <input type="text" 
            name = "country"
            placeholder="Search for a country"
            className="w-[350px] px-4 py-3 rounded-md mb-6"
            />
            <div>
                filter
            </div>
        </div>
    )
}