import React, { useContext, useEffect, useState } from 'react'
import {CurrentLoacationContext} from '../App' ; 
import {fetchCountryList} from '../api__requests'; 


const CountrySelector = () => {
    const [currentLoacation , setCurrentLocation] = useContext(CurrentLoacationContext) ; 
    const [countries , setCountries] = useState(null) ;
    useEffect(() => {
        const getCountryData = async() => {
            const data = await fetchCountryList() ; 
            setCountries(data); 
        }
        getCountryData()
    } , [])

    
    return (
        <div className = "selector">
            <h3>Choose country to view stats</h3><br />
            <select value = {currentLoacation} onChange = {(e) => setCurrentLocation(e.target.value)}>
                <option value="Global" default>Global</option>
                {countries && countries.map((country , index) => {
                    return <option value = {country.name} key = {index}>{country.name}</option>
                })}
            </select>
        </div>
    )
}

export default CountrySelector
