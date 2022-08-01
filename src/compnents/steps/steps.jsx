import "./steps.css"

const Steps = () => {
        return(
        <div>
            <div className="steps">
            <div className="stepDesc">
                <img src="./image/choose.jpg" alt="" className="stepImg"/>
                <h3 className="stepHeading">Step 1 : Choose a challenge</h3>
                <p className="stepDesciption">Choose a challenge, read the description carefully. Paths help you navigate and you can earn a certificate after completing all challenges in the path.</p>
            </div>

            <div className="stepDesc">
                <img src="./image/work.jpg" alt="" className="stepImg"/>
                <h3 className="stepHeading">Step 2 : Work by yourself or with a team</h3>
                <p className="stepDesciption">All challenges can be completed by one person, but teamwork is important at workplaces, if the challenge is too big for you, ask a friend to join.</p>
            </div>

            <div className="stepDesc">
                <img src="./image/submit.jpg" alt="" className="stepImg"/>
                <h3 className="stepHeading">Step 3 : Submit your solutions and give feedback</h3>
                <p className="stepDesciption">When you complete the challenge, submit your solution. You can also check if there is an existing solution and give them some feedback.</p>
            </div>
        </div>
        <h3 className="pathead"> Challenge Paths</h3>
        </div>

    )
} 

export default Steps