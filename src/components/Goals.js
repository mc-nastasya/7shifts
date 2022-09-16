import React, { useEffect, useState } from 'react'
import Goal from './Goal'
import "./Goals.scss"

function Goals() {
    const [ reward1Achieved, setReward1Achieved ] = useState(true)
    const [ reward2Achieved, setReward2Achieved ] = useState(true)
    const [ reward3Achieved, setReward3Achieved ] = useState(true)

    const [ daysLeft, setDaysLeft ] = useState(null)

    const [ goal1Type, setGoal1Type ] = useState(null)
    const [ goal1NumberValue, setGoal1NumberValue] = useState(null)
    const [ goal1CurrentNumber, setGoal1CurrentNumber] = useState(null)
    const [ goal1Title, setGoal1Title ] = useState(null)
    const [ goal1Description, setGoal1Description] = useState(null)

    const [ goal2Type, setGoal2Type ] = useState(null)
    const [ goal2NumberValue, setGoal2NumberValue] = useState(null)
    const [ goal2CurrentNumber, setGoal2CurrentNumber] = useState(null)
    const [ goal2Title, setGoal2Title ] = useState(null)
    const [ goal2Description, setGoal2Description] = useState()

    const [ goal3Type, setGoal3Type ] = useState(null)
    const [ goal3NumberValue, setGoal3NumberValue] = useState(null)
    const [ goal3CurrentNumber, setGoal3CurrentNumber] = useState(null)
    const [ goal3Title, setGoal3Title ] = useState(null)
    const [ goal3Description, setGoal3Description] = useState()

    //Inputs 

    //reward value
    const rewardValue = "$25"
    
    //goal1 values
    const goal1TypeIs = "max"
    const goal1 = "Revenue"
    const description1 = "Your hard work does not go unnoticed, and it also shouldn’t go unpaid. When we profit, you should too!"
    const goal1Number = 10000
    const goal1Current = 6000

    //goal2 values

    const goal2TypeIs = "min"
    const goal2 = "Shift Attendance"
    const description2 = "Missing shifts can affect the productivity of the team and lead to mistakes. Help us manage our roster and get perks"
    const goal2Number = 4
    const goal2Current = 3

    //goal3 valeues 
    const goal3TypeIs = "min"
    const goal3 = "Lateness"
    const description3 = "Showing up to work on-time, increases productivity, alleviates stress and builds trust with your team!"
    const goal3Number = 1.5
    const goal3Current = 0.75

    
    useEffect (()=>{
        
        setDaysLeft(0)
    //goal1
        setGoal1Type(goal1TypeIs)
        setGoal1NumberValue(goal1Number)
        setGoal1CurrentNumber(goal1Current)
        setGoal1Title(goal1)
        setGoal1Description(description1)

    //goal2
        setGoal2Type(goal2TypeIs)
        setGoal2NumberValue(goal2Number)
        setGoal2CurrentNumber(goal2Current)
        setGoal2Title(goal2)
        setGoal2Description(description2)
        
    //goal3
        setGoal3Type(goal3TypeIs)
        setGoal3NumberValue(goal3Number)
        setGoal3CurrentNumber(goal3Current)
        setGoal3Title(goal3)
        setGoal3Description(description3)
    },[])
    
  return (
    <section className='goals'>
        <div className='goals__titles'>
            <h2 className='goals__title'>Weekly Goals</h2>
            <h2 className='goals__title goals__title--rewards'>Rewards</h2>
        </div>
        <Goal 
            goalType={goal1Type}
            goalTitle={goal1Title}
            goalDescription={goal1Description}
            goalNumber={goal1NumberValue}
            goalNumberLastWeek="12354"
            currentNumber={goal1CurrentNumber}
            daysLeft={daysLeft}
            rewardAchieved={reward1Achieved}
            setRewardAchieved={setReward1Achieved}
         />
         <Goal 
            goalType={goal2Type}
            goalTitle={goal2Title}
            goalDescription={goal2Description}
            goalNumber={goal2NumberValue}
            goalNumberLastWeek="3"
            currentNumber={goal2CurrentNumber}
            daysLeft={daysLeft}
            rewardAchieved={reward2Achieved}
            setRewardAchieved={setReward2Achieved}
            rewardNumber={rewardValue}
         />
         <Goal 
            goalType={goal3Type}
            goalTitle={goal3Title}
            goalDescription={goal3Description}
            goalNumber={goal3NumberValue}
            goalNumberLastWeek="3"
            currentNumber={goal3CurrentNumber}
            daysLeft={daysLeft}
            rewardAchieved={reward3Achieved}
            setRewardAchieved={setReward3Achieved}
            rewardNumber={rewardValue}
         />
    </section>

  )
}

export default Goals