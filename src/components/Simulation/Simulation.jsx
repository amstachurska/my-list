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
    if (step === 3) {
      const timeoutId = setTimeout(() => {
        increaseSimulationCounter()
        goBackToApp()
        return clearTimeout(timeoutId)
      }, 5000)
    }
  }, [step, increaseSimulationCounter, goBackToApp])
  return (
    <div
      style={{
        backgroundColor: 'grey',
        padding: '20px',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        opacity: 1,
        zIndex: '10000',
      }}
    >
      <div
        style={{
          backgroundColor: 'purple',
          display: 'flex',
          position: 'relative',
          zIndex: '1000',
          width: '80vw',
          height: '80vh',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          left: '10vw',
          top: '10vh',
        }}
      >
        {step === 1 && (
          <div
            style={{
              margin: '20px',
              color: 'orange',
              fontSize: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            This is a simulation of system reinstalation.
            {simulationCounter > 0 ? (
              <span>
                Your system was previously reinstalled... You are reinstalling
                if for {simulationCounter} time. Watch the next screan layout
                carrefully
              </span>
            ) : (
              <span> You have not run this simulation before.</span>
            )}
            <Button
              type="primary"
              onClick={() => setStep(2)}
              style={{ margin: '50px', maxWidth: '150px' }}
            >
              Reinstall
            </Button>
          </div>
        )}
        {step === 2 && (
          <>
            <div style={{ margin: '20px', display: 'flex' }}>
              <label
                htmlFor="name"
                style={{ color: 'orange', margin: '0 10px', fontSize: '20px' }}
              >
                E-mail login
              </label>
              <div>
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    !isNameTouched && setIsNameTouched(true)
                    setName(e.target.value)
                  }}
                  style={{ display: 'block' }}
                ></input>
                <div
                  style={{
                    visibility: `${
                      isNameTouched && !name?.length ? 'visible' : 'hidden'
                    }`,
                    color: '#f5274d',
                  }}
                >
                  <b>field is required</b>
                </div>
              </div>
            </div>
            <div style={{ margin: '20px', display: 'flex' }}>
              <label
                htmlFor="password"
                style={{ color: 'orange', margin: '0 10px', fontSize: '20px' }}
              >
                E-mail password
              </label>
              <div>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    !isPasswordTouched && setIsPasswordTouched(true)
                    setPassword(e.target.value)
                  }}
                  style={{ display: 'block' }}
                ></input>
                <div
                  style={{
                    visibility: `${
                      isPasswordTouched && !password?.length
                        ? 'visible'
                        : 'hidden'
                    }`,
                    color: '#f5274d',
                  }}
                >
                  <b>field is required</b>
                </div>
              </div>
            </div>
            <p style={{ margin: '20px', color: 'orange', fontSize: '20px' }}>
              <i> &lt; It is a simulation so just type down anything &gt;</i>
            </p>
            <div
              style={{
                margin: '20px',
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '80%',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex' }}>
                {simulationCounter > 0 && (
                  <div style={{ margin: '20px' }}>
                    <Button type="primary" onClick={() => setStep(3)}>
                      Skip
                    </Button>
                  </div>
                )}
                <div style={{ margin: '20px' }}>
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
              <p style={{ margin: '20px', color: 'orange', fontSize: '20px' }}>
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
            {' '}
            <p style={{ margin: '20px', color: 'orange', fontSize: '20px' }}>
              Congratulations... The system is reinstalling....
            </p>
            {simulationCounter > 0 && (
              <p>
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
                computers in company and with humans differ. But still, this is
                my personal impression nevertheless worth to know. And of course
                it was pure accident without bad intent. Greetings to Fisher
                Price, although the quaility of these toys are really good -
                they survive almost every treatment. With other problems. With
                problem-generating computer you can get password to email
                account changed on its own (then you bought not recomennded
                VPN). You can also have passwod to account on the computer
                changed. In that case you can get access on your own, there are
                instructions in the net. I strongly recommend that. When you
                will do this, you go to system files folder where you see among
                others the time them files were changed. Then you can localize
                that change in respective file connected with described problems
                were done when you were for 3 months in another town and
                moreover noone was home. Spooky...With changing password I
                prefer previous possibility with going through accessibility to
                nice blue screens instread of using, coping and manipulating
                files in running system itself.
                <div>
                  <div>Producent</div>
                  <div>Processor producer</div>
                  <div>Seller</div>
                </div>
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
