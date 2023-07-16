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
                system - the application in this case.
                <br />
                In your regular system you can check logs and if you see that
                the logs were cleaned before you even bougth computer and that
                some action was being made you have a problem. (My case computer
                bought at the end of August 2022). Logs, well... Everything is a
                kind of file (I mean something where the information is stored).
                You can be tricked into reinstalling or just have valid reasons.
                I reinstalled it and during that I had seen something is wrong
                -it needed connection with email. With my experience with seing
                that same e-mails in gmail were changed in the database it is
                difficult to pinpoint the cause. Apart that reinstallation file
                was corrupted.
                <br />
                The conclusion is: reinstalling system with files included in
                corrupted system makes no sense. Also downloading new system on
                corrupted system makes no sense although simetimes control sums
                are available (I have seen them failing for the first trial of
                downloading and with next dowloading they were ok, seen that in
                October 2022 when I started IT studies and downloaded some
                necessary tools). Only external trusted source of the system is
                the solution. Do not allow the seller to open computer box in
                the shop even in your presence (Also conclusion from August
                2022).
                <br />
                You can observe strange behaviour, in my case forcing to
                register using email (checked in the internet, it should not be
                required). The same with other accounts connected with e-mail.
                In this way you are giving access to anything connected (in my
                case if was Linkedin connected with Gmail).
                <br />
                Another thing is after loggin to some services, eg in my case
                Amazon Prime Video, the list of recent movies and generally the
                initial screen of web-page app changed on its own on the same
                computer without changing setting neither of computer nor inside
                web page app nor web page itself. It is probably not
                Amazon-related thing but more system related and overlapping on
                login information. And to be honest it is rather a good thing
                becase it indicates that something is wrong (seen that on
                computer bought in August 2022). Proper displayment of Teams
                presence icon can be also an indicator (seen on different
                computer in spring and summer 2022). Evering starts with the
                notice and the wander. With email controlled, computer
                controlled, that you have left... phone. Phone... not really.
                Still, you can walk :)
                <br />
                Having this type of situation - you can try to defend or simply
                ignore it, changes will be made to limit your posibilites,
                distroy what can be distroyed, iritate you, lower your
                credibility and observing rather than commiting crime which can
                be easily demonstrated and which will force the proper public
                servises to take some action when reported. The biggest problem
                causes changes which can linit your movements and actions, which
                can siomehow contain, immobiize or restrict you.
                <br />
                Oh, another thing. If you have nephew (my case) or kid, you can
                get two almost identical toys for him (happened during my PhD
                studies). They run on bateries and were making sounds. Upon
                usage they differ between each other with time of working using
                batery and then one of them broke - stoped working on its own.
                Fortunatelly, my sister kept these toys. You can check inside -
                the changes on processors done by computers in company and by
                humans by hands probably differ. Still, it is my personal
                impression. I did that this year when I started connecting dots
                and got the toy. Fortunatelly, the quaility of Fisher Price's
                toys is really good - they survive almost every treatment - no
                other option for chosing.
                <br />
                With other problems. With problem-generating computer you can
                get password to email account changed on its own (then you
                bought not recomennded VPN, autumn 2022). Still, after getting
                access to email, getting codes you can install the softwere,
                which helps.
                <br />
                Sounds computer related. Definitively not. My problems with
                computer started during master studies. Previously with
                computers from different companies . The first problem I had
                during master study was connected with system32 file, which I
                have to replace manually. It would be about 16 years ago.
                <br />
                You can also have passwod to account on the computer changed. I
                had in autumn 2021, among others, but one in autumn 2021 was
                crucial (only officially approved programs were installed on the
                computer). You can reset password for the local account on your
                computer - meaning you can restore access on your own, there are
                instructions in the internet. I strongly recommend that. When
                you will do this, you go to system files folder where you see
                among others the time them files were changed. Then you can
                localize that change in respective file connected with described
                problems. When I was doing that at the very beginning of 2022, I
                realized that the changes were done in autum 2021, at that time
                I was working in for 3 months in another town and was not home.
                Moreover no one was home. Spooky...Still, somehow it was done,
                the higher chance that personally rather than remotely. With
                changing password I prefer previous possibility with going
                through accessibility to nice blue screens instread of using,
                coping and manipulating files in running system itself. Againg
                checking the problems with system using this system tools makes
                not sense.
                <br />
                Now about coincidence. What is the chance that you have 2
                different computers localized in 2 different places and that
                they will have password to local account blocked making them
                unusable? My case - 100%. In September 2021 apart the changes in
                the computer which I described above, it also happened with my
                personal computer which I was using and keeping on rented flat.
                The password was magically changed just after I enrolled to IT
                studies. Password was changed on Saturday and on Monday the
                first student session which lasted several days and ended with
                exam was starting. Good thing that it was done using School
                equipment and also that I managed to use the computer. I did not
                installed anything nor even log into a student system before the
                crush. I did not make system updates and there were no
                information on system updates to be avaliable. I usually
                postpone updates around crucial moments when I need computer.
                The reason will be below. Still, I did not hear about any action
                by hackers at that time and I am just a common person with no
                position whatsoever, so I was rather not the target of foreigh
                services.
                <br />
                The passwords changes are not the worst. Much more worse are
                crushes of system when writing something important (article,
                grant application), or after just sending it. For me ir was
                usually when I was at finishing stage or just after finishing
                it. It happened several times. And no, no new aps were being
                installed at that time because I was busy and did not have time
                for anything else. I had learnt to copy everything to pendrive
                several times a day, kind of manually created github. In spring
                2017 I submitted grant application, which was rejected. Still,
                at this time there were updates available when I was finishing
                the project application, but I did not installed them
                immediatelly. And good thing that I did not. I completed
                project, send it and started the updates. And then the computer
                crushed - it was impossible to initialize the system. When I get
                the computer to a guy, which my sister recommended (someone
                recommended him to her), it turned out that the disk was
                distroyed, I was told that by the guy, and new disk needed to be
                bought and system was installed on it. Still, when I asked the
                guy for the disk which was broken, he did not give it back to
                me, although it belonged to me and I asked and visited him
                several times. So good thing that I submitted the grant
                application before system updates and that I was regularly
                coping it on pendrives. Well, generally system actualization and
                updates are not the things that should break your computer. And
                it is something that it relatively often and usually works fine.
                Still, it might happen, but I have a feeling that I have a bad
                luck regularly in connection with important moments in my
                proffesional path. And I do not believe in bad luck. Interesting
                thing with the system crushing connected with sumbiting
                scientific project in Poland for researchers with PhD, it
                happened when I was unemployed, stayed at home and in that time
                I wrote this project. As every project which I submited in my
                name, writing it on my own. So it seems like the proves of me
                writing it on my own had to be removed or it would be best to
                get it just completed with me not sending it. Still, personal
                impression. Based on the facts described above, there was not a
                chance that the project could be falesly connected with me
                contacting someone in the place of work or being employed and
                thus getting paid and falesely said to be writing the project in
                the frame of employment contract. No email of interest. Still,
                the project was rejected so apparently it was not worth
                mentioning. In was not in IT field but biotechnology and this
                information is for better understandment of the situation when
                system crashes can hapen. Facts are facts and they remain vaild.
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
