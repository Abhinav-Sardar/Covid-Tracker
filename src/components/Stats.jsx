import React, { useEffect , useState} from 'react'
import StatCard from './StatCard';
import {CurrentLoacationContext} from '../App' ; 
import {fetchIndivisualCountryData} from '../api__requests' ;
const Stats = () => {
    const [currentLocation , setCurrentLocation] = React.useContext(CurrentLoacationContext); 
    const [data , setData] = useState(null) ; 
    useEffect(() => {
        // fetchIndivisualCountryData(currentLocation) ; 
        const fetchData = async() => {
            const data = await fetchIndivisualCountryData(currentLocation) ; 
            console.log(data) ; 
            const confirmed = data.confirmed.value ; 
            const recovered = data.recovered.value ; 
            const deaths = data.deaths.value ; 
            setData([confirmed , recovered , deaths]) ; 

            // setData([data.confirmed.value])
        }
        fetchData();
    } , [currentLocation])
    return (
        <div className = "stats__container">
            {data &&<>
            <StatCard color = "blue" content = "Total Cases" number = {data[0]}/>
            <StatCard color = "green" content = "Recovered" number = {data[1]}/>
            <StatCard color = "red" content = "Deaths" number = {data[2]}/></>}
        </div>
    )
}

export default Stats ; 
