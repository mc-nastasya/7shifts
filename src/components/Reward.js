// import React, { useEffect, useState } from 'react'
import reward from "../assets/reward.svg"


function Reward ( { rewardNumber } ) {
    return (
        <div className="goal">
            <img className="goal__image" src={reward} alt="something"/>
            <h4 className="goal__subtitle"><span>{rewardNumber}</span> per staff member</h4>
            <p className="goal__text">Keep going we're on the right track!</p>
        </div>
    )

}
export default Reward