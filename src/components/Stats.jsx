import React from 'react'
import StatCard from './StatCard';
const Stats = () => {
    return (
        <div className = "stats__container">
            <StatCard color = "red"/>
            <StatCard color = "blue"/>
            <StatCard color = "green"/>
        </div>
    )
}

export default Stats ; 
