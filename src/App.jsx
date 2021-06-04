import React, { createContext, useState } from 'react' ; 
import './styles.css'
import Header from './components/Header';
import Stats from './components/Stats' ; 
import CountrySelector from './components/CountrySelector';
import Bar from './components/Bar' ;
export const CurrentLoacationContext = createContext() ; 
const App = () => {
    const [currentLoacation , setCurrentLocation] = useState('Global')
    return (
        <div className = "app">
            <CurrentLoacationContext.Provider value = {[currentLoacation , setCurrentLocation]}>
            <Header/>
            <Stats/>
            <CountrySelector/>
            <Bar/>
            </CurrentLoacationContext.Provider>
        </div>
    )
}

export default App
