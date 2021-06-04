import React from 'react'
import Countup from 'react-countup'
import {CurrentLoacationContext} from '../App' ; 
const StatCard = ({color , content , number}) => {
    const [currentLocation , setCurrentLocation] = React.useContext(CurrentLoacationContext) ; 
    return (
        <div className="stat" style = {{borderBottom:`8px solid ${color}`}}>
            <center>
                <div className="placename">{currentLocation}</div>
                <div className="number">
                <Countup
                start = {0}
                end = {number}
                duration = {String(number).length >= 5 ? 4 : 2}
                separator = {","}
                />
                </div>
                <div className="content">
                {content}
                </div>
            </center>
            
        </div>
    )
}

export default StatCard
