import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

export const Simulation = ({
  simulationCounter,
  increaseSimulationCounter,
  goBackToApp,
}) => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordTouched, setIsPasswordTouched] = useState(false)
  const [isNameTouched, setIsNameTouched] = useState(false)

  useEffect(() => {
    if (step === 3 && simulationCounter === 0) {
      const timeoutId = setTimeout(() => {
        increaseSimulationCounter()
        goBackToApp()
        return clearTimeout(timeoutId)
      }, 5000)
    }
  }, [step, increaseSimulationCounter, goBackToApp, simulationCounter])

  const handleClick = () => {
    increaseSimulationCounter()
    goBackToApp()
  }

  return (
    <div className="simulation">
      <div className="simulation-container">
        {step === 1 && (
          <div className="simulation__step-1">
            This is a simulation of system reinstalation.
            {simulationCounter > 0 ? (
              <span>
                Your system was previously reinstalled... You are reinstalling
                if for {simulationCounter + 1} time. Read the next screan
                carrefully
              </span>
            ) : (
              <span> You have not run this simulation before.</span>
            )}
            <Button
              className="simulation__step-1-reinstall"
              type="primary"
              onClick={() => setStep(2)}
            >
              Reinstall
            </Button>
          </div>
        )}
        {step === 2 && (
          <>
            <div className="simulation__step-2-form-item">
              <label
                className="simulation__step-2-form-item-label"
                htmlFor="name"
              >
                E-mail login
              </label>
              <div>
                <input
                  className="simulation__step-2-form-item-input"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    !isNameTouched && setIsNameTouched(true)
                    setName(e.target.value)
                  }}
                ></input>
                <div
                  className={`simulation__step-2-form-item-error ${
                    isNameTouched && !name?.length ? '' : 'hidden'
                  }`}
                >
                  <b>Field is required</b>
                </div>
              </div>
            </div>
            <div className="simulation__step-2-form-item">
              <label
                htmlFor="password"
                className="simulation__step-2-form-item-label"
              >
                E-mail password
              </label>
              <div>
                <input
                  className="simulation__step-2-form-item-input"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    !isPasswordTouched && setIsPasswordTouched(true)
                    setPassword(e.target.value)
                  }}
                ></input>
                <div
                  className={`simulation__step-2-form-item-error ${
                    isPasswordTouched && !password?.length ? '' : 'hidden'
                  }`}
                >
                  <b>Field is required</b>
                </div>
              </div>
            </div>
            <p className="simulation__step-2-info">
              <i> &lt; It is a simulation so just type down anything &gt;</i>
            </p>
            <div className="simulation__step-2-nav">
              <div className="simulation__step-2-nav-container">
                {simulationCounter > 0 && (
                  <div className="simulation__step-2-nav-container-item">
                    <Button type="primary" onClick={() => setStep(3)}>
                      Skip
                    </Button>
                  </div>
                )}
                <div className="simulation__step-2-nav-container-item">
                  <Button
                    type="primary"
                    danger
                    onClick={() => setStep(3)}
                    disabled={!name || !password}
                  >
                    Continue
                  </Button>
                </div>
              </div>
              <p className="simulation__step-2-comment">
                <i>
                  {simulationCounter > 0
                    ? 'There it is... The skip button. Now you can reinstall system without connecting to your email'
                    : 'Where is skip button? No skip button? Well, whatever...I will have to log in...'}
                </i>
              </p>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            {simulationCounter === 0 && (
              <p className="simulation__step-3">
                Congratulations... The system is reinstalling....
              </p>
            )}
            {simulationCounter > 0 && (
              <p className="simulation__step-3">
                Now you can check for strange presence or behavoiur in the
                system - the application in this case. In your regular system
                you can check logs and if you see that the logs were cleaned
                before you even bougth computer and that some action was being
                made you have a problem. Logs, well... Everything is a kind of
                file (I mean sth where the information is stored). Reinstalling
                system with files included in corrupted system makes no sense.
                Also downloading new system on corrupted system makes no sense
                although simetimes control sums are available (I have seen them
                failing and with next dowloading they were ok). Only external
                trusted source of the system is the solution. Do not allow the
                seller to open computer box in the shop even in your presence.
                You can try to defend or simply ignore it, changes will be made
                to limit your posibilites, distroy what can be distroyed,
                iritate you, loweer your credibility and observing rather than
                commiting crime which can be easily demonstrated and which will
                force the proper public servises to take some action when
                reported. You can observe strange behaviour, in my case forcing
                to register using email. The same with other accounts connected
                with e-mail. In this way you are giving access to anything
                connected (in my case if was Linkedin connected with Gmail).
                Evering starts with the notice and the wander. Another thing is
                loggin to some services, eq in my Amazon Video list of recent
                movies and generaly initial screen changed on its own on the
                same computerwithout changing setting neither on computer nor
                inside web page app. It is probably not Amazon-related thing but
                more system related and overlapping on login information. Proper
                displayment of Teams presence icon can be also an indicator.
                With email controlled, computer controlled, that you have
                left... phone. Suprise, not really. Still you can walk :)
                <b>dodac przekierowania do shadow applications</b>
                Oh, another thing. If you have nephews or kids and you got some
                toys for them and they run on bateries and making sounds and
                they differ between each other with time of working using batery
                and then one of them breaks on its own - I mean stops working.
                You can check inside - the changes on processors done by
                computers in company and by humans by hands probably differ. But
                still, this is my personal impression nevertheless worth to
                know. And of course it was pure accident without bad intent. The
                quaility of Fisher Price's toys is really good - they survive
                almost every treatment. With other problems. With
                problem-generating computer you can get password to email
                account changed on its own (then you bought not recomennded
                VPN). Still, it helped, although I bought and installed in
                autumn 2022. My problems with computer started during master
                studies. You can also have passwod to account on the computer
                changed (autumn 2021,among others, but one in autumn 2021 was
                crucial, only officially approved programs were installed on the
                computer). You can reset password on your commupter - meaning
                you can get access on your own, there are instructions in the
                ineternet. I strongly recommend that. When you will do this, you
                go to system files folder where you see among others the time
                them files were changed. Then you can localize that change in
                respective file connected with described problems were done when
                you were for 3 months in another town and moreover noone was
                home. Spooky...Still, somehow it was done, the higher chance
                that personally rather than remotely. With changing password I
                prefer previous possibility with going through accessibility to
                nice blue screens instread of using, coping and manipulating
                files in running system itself. The passwords changes are not
                the worst. Much more worse are crushes of system when writing
                something important (article, grant application), or after just
                sending it. For me ir was usually when I was at finishing stage
                or just after finishing it. And no, no new aps were being
                installed at that time because I was busy and did not have time
                for anything else. I had learnt to copy everything to pendrive
                several times a day, kind of manually created github.
                <div className="simulation__step-3-container">
                  <div>Producent</div>
                  <div>Processor producer</div>
                  <div>Seller</div>
                </div>
                <div className="simulation__step-3-container">
                  <Button type="primary" onClick={handleClick}>
                    Go to main page
                  </Button>
                </div>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
