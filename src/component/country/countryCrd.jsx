import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nanoid } from 'nanoid';
import SearchFilter from "./SearchFilter";
import { ThemeContext } from "../../App";

export default function CountryCard() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputData, setInputData] = useState('');
    const { isDark } = useContext(ThemeContext);

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false); // Ensure loading is stopped in case of an error
            });
    }, []);

    function handleChange(e) {
        setInputData(e.target.value);
    }

    const inputFilterData = data.filter((item) => {
        return item.name.common.toLowerCase().includes(inputData.toLowerCase());
    });

    const renderData = (inputData ? inputFilterData : data).map((country) => {
        return (
            <div className="w-fit flex flex-col justify-center items-center m-2 shadow" key={nanoid()}>
                <Link to={`/countries/${country.ccn3}`}>
                    <img src={country.flags.png} alt="country flags" className="w-[200px] h-[130px] rounded-t-sm" />
                    <div className={`p-5 rounded-b-[3px] w-[200px] ${isDark ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
                        <h3 className="font-bold mb-2">{country.name.common}</h3>
                        <p className="text-xs text-gray-400"><span className="font-medium text-sm">Population: </span>{country.population}</p>
                        <p className="text-xs text-gray-400"><span className="font-medium text-sm">Region: </span>{country.region}</p>
                        <p className="text-xs text-gray-400 pb-4"><span className="font-medium text-sm">Capital: </span>{country.capital}</p>
                    </div>
                </Link>
            </div>
        );
    });

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <SearchFilter handleChange={handleChange} setData={setData} />
            <div className={`flex flex-wrap justify-between gap-3 items-center px-4 overflow-hidden w-full ${isDark ? "bg-gray-900" : ""}`}>
                {renderData}
            </div>
        </>
    );
}
