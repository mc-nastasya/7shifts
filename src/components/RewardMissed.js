import React from 'react'
import missed from "../assets/missed.svg"


function RewardMissed( {missedGoalTip} ) {
    return (
        <div className='goal'>
            <img className='goal__image' src={missed} alt="something"/>
            <h4 className='goal__subtitle'>We missed out this week</h4>
            <p className='goal__text'>{missedGoalTip}</p>
        </div>
  )
}

export default RewardMissed