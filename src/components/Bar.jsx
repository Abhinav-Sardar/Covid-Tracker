import {Bar , defaults} from 'react-chartjs-2' ; 
import React , { useContext, useState , useEffect} from 'react'
import {CurrentLoacationContext} from '../App' ;
import {fetchIndivisualCountryData} from '../api__requests' ; 
defaults.plugins.legend.display = false ; 
const BarChart = () => {
    const [currentLocation , setCurrentLocation] = React.useContext(CurrentLoacationContext); 
    const [data , setData] = useState(null) ; 
    useEffect(() => {
        const fetchData = async() => {
            const data = await fetchIndivisualCountryData(currentLocation) ; 
            console.log(data) ; 
            const confirmed = data.confirmed.value ; 
            const recovered = data.recovered.value ; 
            const deaths = data.deaths.value ; 
            setData([confirmed , recovered , deaths]) ; 
        }
        fetchData();
    } , [currentLocation])
    
    return (
        <div className = "bar">
            {data && <React.Fragment>
                <Bar
                data = {{
                    labels:["Total Cases" , "Recovered" , "Death"],
                    datasets:[
                        {
                            label:currentLocation , 
                            data:[data[0] , data[1] , data[2]],
                            borderColor:"black" , 
                            borderWidth:2, 
                            border:"1px solid black",
                            backgroundColor:["blue" , "lime" , "red"],
                            maxHeight:11
                        }
                    ]
                }}
                options = {{
                    scales:{
                        yAxes:[
                            {
                                ticks:{
                                    reverse:true , 
                                    beginAtZero:true
                                }
                            }
                        ]
                    }
                }}
                
                />
        </React.Fragment>}
        </div>
    )
}

export default BarChart ; 