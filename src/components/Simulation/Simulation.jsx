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
            This is a simulation of system reinstallation.
            {simulationCounter > 0 ? (
              <span>
                Your system was previously reinstalled... You are reinstalling
                if for a {simulationCounter + 1} time. Read the next screan
                carrefully.
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
                    ? 'There it is... The "Skip" button. Now you can reinstall system without connecting to your email'
                    : 'Where is "Skip" button? No "Skip" button? Well, whatever...I will have to log in...'}
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
              <div className="simulation__step-3">
                {/* Now you can check for strange presence or behavoiur in the
                system - the application in this case.
                <br /> */}
                <h2 style={{ color: 'white', margin: '20px' }}>
                  My personal experience with corrupted system reinstallation
                </h2>
                <p>
                  In your regular system you can check logs and if you see that
                  the logs were cleaned before you even bougth computer and that
                  some action was being made, then you have a problem. (In my
                  case computer which I bought at the end of August 2022). Logs,
                  well... Everything is a kind of file (I mean something where
                  the information is stored).
                  <br />
                  <br />
                  You can be tricked into reinstalling or just have valid
                  reasons. I reinstalled it and during that I had already seen
                  that something is wrong - it needed connection with email.
                  With my experience with seing that same e-mails in gmail were
                  changed in the database it is difficult to pinpoint the cause.
                  Apart that reinstallation file was corrupted, as I forced the
                  connection with email.
                </p>
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  Conclusions to which I came upon my experience
                </h2>
                <ul>
                  <li style={{ margin: '10px 0' }}>
                    <b style={{ color: '#f5c842' }}>
                      Reinstalling system with files included in corrupted
                      system makes no sense
                    </b>
                  </li>
                  <li style={{ margin: '10px 0' }}>
                    <b style={{ color: '#f5c842' }}>
                      Downloading new system on corrupted system makes no sense
                    </b>{' '}
                    although sometimes control sums are available (I have seen
                    them failing for the first trial of downloading and with
                    next dowloading they were ok, seen that in October 2021 when
                    I started IT studies and downloaded some necessary tools).
                  </li>
                  <li style={{ margin: '10px 0' }}>
                    <b style={{ color: '#f5c842' }}>
                      Only external trusted source of the system is the
                      solution.
                    </b>
                  </li>
                  <li style={{ margin: '10px 0' }}>
                    Do not allow the seller to open computer box in the shop
                    even in your presence (conclusion from August 2022).
                  </li>
                </ul>
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  How to realize it
                </h2>
                You can observe{' '}
                <b style={{ color: '#f5c842' }}>strange behaviour</b>, in my
                case{' '}
                <b style={{ color: '#f5c842' }}>
                  forcing to register using email
                </b>{' '}
                (checked in the internet, it should not be required).
                <br />
                <br />
                It is good to realize one big problem with connected accounts.
                <b style={{ color: '#f5c842' }}>
                  {' '}
                  If someone has access to one email account then via connection
                  he has an access to all connected.
                </b>
                <br />
                Not with admin provileges, it is company specific, but enough to
                modify the data you have included in other applications, the one
                which can be modified by you, so also by the one who pretend to
                be you. Connected accounts only see the valid login. Valid in
                the same way for person with admin privileges in original email
                and person who cought your login information. In my case I did
                had double-protection of email. It did not helped. It would
                never help against admin. In this way you are giving access to
                anything connected (In my case if was Linkedin connected with
                Gmail).
                <br />
                <br />
                Another thing is after loggin to some services, in my case
                Amazon Prime Video, the list of recent movies and generally{' '}
                <b style={{ color: '#f5c842' }}>
                  the initial screen of web-page application changed on its own
                  on the same computer without changing setting neither of
                  computer nor inside web page application nor web page itself
                </b>
                . It is probably not Amazon-related thing but more system
                related and overlapping of informations from logins of different
                users. And to be honest it is rather <i>a good thing </i>becase
                it indicates that something is wrong (seen that on computer
                bought in August 2022). Proper displayment of Microsoft Teams
                presence icon can be also an indicator (seen on different
                computers in spring and summer 2022).
                <br />
                <br />
                Evering starts with the notice and the wander. With email
                controlled, computer controlled, that you have left... phone.
                Phone... not really. Still, you can walk :)
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  What to do...
                </h2>
                Having this type of situation, you can try to defend or simply
                ignore it, changes will be made to limit your posibilites,
                distroy what can be distroyed, iritate you, lower your
                credibility and observing rather than commiting crime which can
                be easily demonstrated and which will force the proper public
                servises to take some action when reported. The biggest problem
                causes changes which can linit your movements and actions, which
                can siomehow contain, immobiize or restrict you.
                <br />
                And I will strongly advise you to try to record the changes. And
                keep it safe outside of system and in safe place. If yuou think
                that your flat is safe you are mistaken. I have seen data
                removed from hard drive which I kept at home. Not everything
                though. Just buy a regular safe. In this way you will make it
                more difficult for ones targeting you. Don't make it easy for
                them.
                <br />
                <br />
                <br />
                Oh, another thing connected with items corruption.
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  Watch out for gifts from so-called work associates
                </h2>
                If you have nephew (my case) or kid, you can get two almost
                identical toys for him (happened during my PhD studies). They
                run on bateries and were making sounds. Upon usage they differ
                between each other with time of working using batery and then
                one of them broke - stoped working on its own. Fortunatelly, my
                sister kept these toys. You can check inside -{' '}
                <b style={{ color: '#f5c842' }}>
                  the changes on processors done by computers in company and by
                  humans by hands probably differ
                </b>
                . Still, it is my personal impression. I checked this out that
                this year when I started connecting dots and got the toy.
                Fortunatelly, the quaility of Fisher Price's toys is really good
                - they survive almost every treatment - no other option for
                chosing.
                <br />
                <br />
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  Problems following corrupted system
                </h2>
                With my problem-generating computer I got{' '}
                <b style={{ color: '#f5c842' }}>
                  password to email account changed on its own
                </b>
                . It was not Gmail account. After problems with changes in sent
                Gmail emails not done by myself I decided to create other
                account. So changing an e-mail does not help in case of
                corrupted system. It happened just after I bought not
                recomennded VPN in autumn 2022. Still, after getting access to
                email and getting codes you can install the softwere, which
                helps. How I knew it changes on its own? Previously I had
                problems with computer accounts access. So to make sure that it
                is fine, I wrote down the password to email on paper and always
                kept it in my bag. And when I was working in Hawk-e I started to
                keep my bug with me even going to toilet as one time after
                quicker than expected visit in toilet (just for washing hands) I
                saw my bag open. Writing down paswords might be not very safe
                but in my case it served its purpose as in that way I could be
                sure that the password I was typing was correct.
                <br />
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  When did it start? Maybe computer related?
                </h2>
                Sounds computer related. Definitively not. My problems with
                computer started during master studies in 2007. And it was with
                computers from different companies. The first problem I had
                during master study was connected with system32 file, which I
                have to replace manually.
                <br />
                So <b style={{ color: '#f5c842' }}>
                  not computer related.
                </b>{' '}
                <br />
                And{' '}
                <b style={{ color: '#f5c842' }}>
                  not computer producer related
                </b>
                . <br />
                <br />
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  My personal experience with computer passwords changed
                </h2>
                I was also targeted by having passwod to account on my personal
                computer changed. I had experienced it in autumn 2021, among
                others, but one in autumn 2021 was crucial (only officially
                approved programs were installed on the computer). You can reset
                password for the local account on your computer - meaning you
                can restore access on your own, there are instructions in the
                internet. I strongly recommend that. When you will do this, you
                go to system files folder where you see among others the time
                when files were changed. Then you can localize that change in
                respective file connected with described problems. When I was
                doing that at the very beginning of 2022, I realized that the
                changes were done in autumn 2021, at that time I was working for
                three months in another town and was not home. Moreover, no one
                was home. Spooky...Still, somehow it was done, the higher chance
                that personally rather than remotely.
                <br />
                <br />
                With changing password I prefer previous possibility with going
                through accessibility to nice blue screen instread of using,
                coping and manipulating files in running system itself.{' '}
                <b style={{ color: '#f5c842' }}>
                  Againg checking the problems with system or fixing problems in
                  system using this corrupted system tools makes not sense.
                </b>
                <h2 style={{ color: 'white', margin: '30px 20px 20px 20px' }}>
                  Coincidence and Probability
                </h2>
                Now about coincidence. What is the chance that you have 2
                different computers localized in 2 different places and that
                they will have password to local account blocked making them
                unusable? My case - 100%.
                <br />
                <br />
                In September 2021 apart the changes in the computer which I
                described above, it also happened with my personal computer
                which I was using and keeping on rented flat. The password was
                magically changed just after I enrolled to IT studies. Password
                was changed on Saturday night and on Monday the first student
                session which lasted several days and ended with exam was
                starting. And no, I was not at a party and no one was at my
                place. No one will get close to targeted person, will support
                her, no matter how hard she will try. And it is extremely
                difficult to be alone, to understand situation alone, to fight
                alone. With studies, fortunatelly, the classes were conducted
                using school's equipment and also that I managed to regain
                access to my personal computer on my own. I did not installed
                anything nor even log into a student system before the crush. I
                did not make system updates and there were no information on
                system updates to be avaliable. I usually postpone updates
                around crucial moments when I need computer. The reason will be
                below. In this situation I needed computer as after the one week
                of practical course there was an exam, which required knowledge
                from lectures available online as well as practical course.
                Still, I did not hear about any action by hackers at that time
                and I am just a common person with no position whatsoever, so I
                was rather not the target of foreign services.
                <h2 style={{ color: 'white', margin: '40px 20px 20px 20px' }}>
                  System crashes and their timeline
                </h2>
                The passwords changes are not the worst. Much more worse are{' '}
                <b style={{ color: '#f5c842' }}>
                  crushes of system when writing something important (article,
                  grant application), or after just sending it
                </b>
                . <br />
                <br />
                In my case it usually happened when I was at finishing stage of
                writing or just after finishing it. It happened several times.
                And no, I did not install any new programs at that time because
                I was busy and did not have time for anything else. When I was
                having this type of problems during master studies I had learnt
                to copy everything to pendrive several times a day, kind of
                manually created github. In spring 2016 I submitted grant
                application, which was rejected. The main part of the project
                can be viewed using the following link{' '}
                <a
                  target="blank"
                  href="https://github.com/amstachurska/mycv/blob/main/public/projects/Homing_11032016.pdf"
                >
                  Link to project
                </a>{' '}
                <br />
                Still, at this time there were{' '}
                <b style={{ color: '#f5c842' }}>system updates available </b>
                when I was finishing the project application, but I did not
                installed them immediatelly. And good thing that I did not. I
                completed project, send it and started the updates. And then the
                computer crushed - it was impossible to initialize the system.
                When I get the computer to a guy, which my sister recommended
                (someone recommended him to her), it turned out that the disk
                was distroyed, I was told that by the guy, and new disk needed
                to be bought and system was installed on it. Still, when I asked
                the guy for the disk which was broken, he did not give it back
                to me, although it belonged to me and I asked and visited him
                several times. <br />
                So good thing that I submitted the grant application before I
                did system updates and that I was regularly coping the grant on
                pendrive. If I did system updates immediatelly when I got the
                notice about them, I would lost my whole work on this grant
                application, I would not be able to sent it, therefore it would
                be not visible in the grant system. Like it never existed.
                Without disk and without possibility of sending the project
                (without accces to files on computer you cannot send them), I
                would be left with nothing. Still, I did not get the funding,
                but at least I submitted my work and decision was done by
                experts, who found it unworthy for financing. But in this way,
                the grant application existed, it was in the system and decision
                had to be made.
                <br />
                <br /> Well, generally system actualization and updates are not
                the things that should break your computer. And it is something
                that it relatively often and usually works fine. Still, it might
                happen, but I have a feeling that I have a bad luck regularly in
                connection with important moments in my proffesional path. And I
                do not believe in bad luck.
                <br />
                <br /> Interesting thing with the system crushing connected with
                sumbitting scientific project described above. The grant funding
                for which I applied was in Poland for researchers with PhD, it
                happened when I was unemployed, stayed at home and in that time
                I wrote this project. As every project which I submited in my
                name, writing it on my own. So it seems like the proves of me
                writing it on my own had to be removed or it would be best to
                get it just completed with me not sending it. Still, it is my
                personal impression. Based on the facts described above, there
                was not a chance that the project could be falsely connected
                with me contacting someone in the place of work or being
                employed and thus getting paid and falsely said to be writing
                the project in the frame of employment contract. No email of
                interest, as I would notice them magically added in Gmail. Or
                maybe not, if not important and added long after the incidend it
                might go unnoticed. Might be, but still it depends how important
                it would be for you and knowing your work style you can also get
                some informations. But, still, no emails. No need for them
                without the disc. Nevertheless, the project was rejected so
                apparently it was not worth mentioning. Was it really not worth
                funding if it was worth getting into lengths for my computer
                crushing and for obtaining the hard disc? Clearly, the
                application submitted by me was not worthy for getting the
                funding.
                <br />
                <br />
                In was not in IT field but biotechnology and this information is
                for better understandment of the situation when system crashes
                can hapen. <br />
                <b style={{ color: '#f5c842' }}>
                  Facts are facts and they remain vaild.
                </b>
                <div className="simulation__step-3-container">
                  <Button type="primary" onClick={handleClick}>
                    Go to main page
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
