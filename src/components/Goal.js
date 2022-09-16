import { useEffect, useState } from "react";
import Reward from "./Reward";
import RewardMissed from "./RewardMissed";
import "./Goal.scss"

function Goal({
  goalTitle,
  goalDescription,
  goalNumber,
  goalNumberLastWeek,
  currentNumber,
  daysLeft,
  goalType,
  rewardAchieved,
  setRewardAchieved,
  rewardNumber
}) {
    const [ rewardMessage, setRewardMessage ] = useState(null);
    const [ numberDisplayed, setNumberDisplayed ] = useState(null);
    const [ currentNumberDisplayed, setCurrentNumberDisplayed ] = useState(null);
    const [ numberPostText, setNumberPostText ] = useState(null)


    useEffect(()=>{
        if (goalType === "max") {
            if (daysLeft > 0) {
                setRewardAchieved(true)
            }
            if (daysLeft === 0 && goalNumber >= currentNumber){
                setRewardAchieved(false)
            }
        }
        if (goalType === "min") {
            if (daysLeft > 0 && goalNumber > currentNumber ) {
                setRewardAchieved(true)
            }
            if (goalNumber < currentNumber) {
                setRewardAchieved(false)
            }
        }
        if (goalTitle === "Revenue") {
            setNumberDisplayed(`$ ${goalNumber}`)
            setNumberPostText("")
            setCurrentNumberDisplayed(`$ ${currentNumber}`)
            if (rewardAchieved && goalTitle === "Revenue") {
                setRewardMessage("Tip: Let's make sure we talk clients through the whole menu.")
            }    
        }
        if (goalTitle === "Shift Attendance") {
            setNumberDisplayed(`${goalNumber}`)
            setNumberPostText("shifts missed")
            setCurrentNumberDisplayed(`${currentNumber}`)
            if (rewardAchieved && goalTitle === "Shift Attendance") {
                setRewardMessage("Tip: Make sure to provide 48 hours notice so we can find a replacement")
            }    
        }
        if (goalTitle === "Lateness") {
            setNumberDisplayed(`${goalNumber}`)
            setNumberPostText("hours")
            setCurrentNumberDisplayed(`${currentNumber}`)
            if (rewardAchieved && goalTitle === "Lateness") {
                setRewardMessage("Tip: Make sure you plan to arrive 15 min early")
            }
        }


    },[goalType, daysLeft, goalNumber, currentNumber, setRewardAchieved, rewardAchieved, goalTitle])
    
  return (
    <div className="goals__section">
        <div className="goal">
            <div className="goal__header">
                <h3 className="goal__title">{goalTitle}</h3>
                <p className="goal__description">{goalDescription}</p>
            </div>
            <div className="goal__blocks">
                <div className="goal__block">
                    <h4 className="goal__subtitle">Objective</h4>
                    <p className="goal__number">{numberDisplayed}<span className="goal__posttext">{numberPostText}</span></p>
                    <p className="goal__subtext">Last week {goalNumberLastWeek}</p>
                </div>
                <div className="goal__block">
                    <h4 card__subtitle>Achieved</h4>
                    <p className={`goal__number ${rewardAchieved ? "green" : "red"}`}>{currentNumberDisplayed}<span className="goal__posttext">{numberPostText}</span></p>
                    <p className="goal__subtext">{daysLeft} days left in the week</p>
                </div>
            </div>
        </div>
        {rewardAchieved ? <Reward rewardNumber={rewardNumber} /> : <RewardMissed missedGoalTip={rewardMessage} />}
    </div>
  );
}

export default Goal;
