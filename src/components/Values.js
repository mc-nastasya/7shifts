import "./Header.scss"
import respect from "../assets/images/respect.svg"
import community from "../assets/images/community.svg"
import teamwork from "../assets/images/teamwork.svg"


function Values() {
  return (
<section>
    <h2 className="our-values">Our Core Values</h2>
    <div className="values">
        <article className="values__card-one">
            <div className="values__respect">
                <img src={respect} alt="respect" />
                <h2 className="values__respect--title">Respect</h2>
                <p className="values__respect--tag">Treat others the way you want to be treated</p>
            </div>
        </article>
        <article className="values__card-two">
            <div className="values__communication">
                <img src={community} alt="communication" />
                <h2 className="values__communication--title">Communication</h2>
                <p className="values__respect--tag">Open communication builds stronger teams</p>
            </div>
        </article>
        <article className="values__card-three">
            <div className="values__teamwork">
                <img src={teamwork} alt="teamwork" />
                <h2 className="values__teamwork--title">Teamwork</h2>
                <p className="values__respect--tag">Foster healthy and productive relationships</p>
            </div>
        </article>
    </div>
</section>
  )
}

export default Values