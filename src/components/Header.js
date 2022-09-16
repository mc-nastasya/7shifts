import "./Header.scss";
import soup from "../assets/icons/Vector.svg"
import dashboard from "../assets/icons/dashboard.svg"
import calendar from "../assets/icons/calendar.svg"
import star from "../assets/icons/star.svg"
import Fourdots from "../assets/icons/fourdots.svg"
import clock from "../assets/icons/clock.svg"
import megaphone from "../assets/icons/megaphone.svg"
import comment from "../assets/icons/comment.svg"
import profile from "../assets/icons/user.svg"
import logo from "../assets/icons/logo.svg"
import satisfied from "../assets/icons/sentiment_very_satisfied.svg"


import React from 'react'

function Header() {
  return (
    <header>
    <nav className="navigation">
    <div className="navigation__left">
    <img src={soup} alt = "test" />
    <span>Test</span>
    </div>
    <div className="navigation__middle">
        <div className="navigation__middle--dashboard">
            <img className="navigation__middle--icon" src={dashboard} alt="dashboard" />
            <span>Dashboard</span>
        </div>
        <div className="navigation__middle--schedule">
            <img src={calendar} alt="schedule" />
            <span>Schedule</span>
        </div>
        <div className="navigation__middle--availability">
            <img src={star} alt="star" />
            <span>Availability</span>
        </div>
        <div className="navigation__middle--shift-pool">
            <img src={Fourdots} alt="star" />
            <span>Shift Pool</span>
        </div>
        <div className="navigation__middle--time-off">
            <img src={clock} alt="star" />
            <span>Time Off</span>
        </div>
        <div className="navigation__middle--engagement">
            <img src={satisfied} alt="satisfied" height="20px" width="20px" />
            <span>Engagement</span>
        </div>
    </div>
    <div className="navigation__right">
        <img src={megaphone} alt="megaphone" />
        <img src={comment} alt="dialogue" />
        <img src={profile} alt="profile" />
        <img className="navigation__right--logo" src={logo} alt="logo" />
    </div>
</nav>

    </header>
  )
}

export default Header