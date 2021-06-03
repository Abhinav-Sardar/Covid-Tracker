import React, { useEffect } from 'react'
import './styles.css' ; 
import {fetchGlobalData , fetchCountries} from './api' 
import {Bar , defaults} from 'react-chartjs-2' ; 
const App = () => {
    defaults.plugins.legend.display = false ; 
    return (
        <React.Fragment>
            <Bar
            data = {{
                labels:['Total Cases' , 'Recorvered' , 'Deaths'] , 
                datasets:[
                    {
                        label:"Number" , 
                        data:[12 , 90 , 9]  , 
                        backgroundColor:["blue" , "lime" , "red"]  , 
                        borderColor:"black",
                        borderWidth:3
                    }
                ]
            }}
            height = {"80vh"}
            />
        </React.Fragment>
    )
}

export default App
