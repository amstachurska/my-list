import React from 'react'

const Introduction = () => {
  return (
    <div
      style={{
        width: '80vw',
        margin: '120px auto',
        border: '3px solid green',
        padding: '24px',
        borderRadius: '5px',
        backgroundColor: '#c9f7be',
      }}
    >
      <h2 style={{ marginBottom: '10px', marginLeft: '10px' }}> Content</h2>
      <p>
        This page contains lists of IT links with description as well as lists
        of movies and anime I watched and books I read in 2020-2021.
        <br />
        <br />
        This is a web page which I mainly developed in 2020-2021. I created in
        to boost my skills. I was interested mainly in services and store as
        usually during working in company these features are set up at the
        beginning of project and work is based on that. I wanted to create page
        containing these features from the scratch, I used json-server for
        backend simulation to ge able to create API calls. Out of other features
        which might be of interest, it contains filtering on front-end side.
        <br />
        <br />
        During my work when I was doing assigned tasks and searching web for
        help I usually came accross valuable informations which helped me with
        assigned tasks. I started to sent links to those to myself and after
        some time I thought that it would be worth to go through these links and
        try to recall it and express in my words, what I usually did in list
        included. In that way I wanted to improve and consolidate my knowledge.
        Moreover, in that way I would be able to get required information when
        facing similar problem in the future. I also wanted to note some
        impressions about books, movies and anime which I watched. Still, I
        created in for myself and I did not aim to publish it at that time.
        Therefore "remarks" in "My Books list" and "content" in "Programming"
        sections look this way.
      </p>
      <h2
        style={{ marginBottom: '10px', marginLeft: '10px', marginTop: '20px' }}
      >
        Navigation information
      </h2>
      <p>
        <b>
          When viewing this page using url adress (in production mode) please
          navigate only using buttons inside the web page.
        </b>
      </p>
      <h2
        style={{ marginBottom: '10px', marginLeft: '10px', marginTop: '20px' }}
      >
        Graphics included
      </h2>
      <p>
        I do not own rights for various graphics included. I will try to provide
        proper links in "README" file in the future if I would be able to find
        these items again.
      </p>
      <h2
        style={{ marginBottom: '10px', marginLeft: '10px', marginTop: '30px' }}
      >
        Reinstallment simulation
      </h2>
      I this page I also created Reinstallment simulation. I tried to
      demonstrate my personal experience with problems with system, when I was
      forced to login to email account during system reinstallment. When I was
      reinstalling it for the next time the login to email was no longer
      required. I tried to recreate the situation I saw.
      <br />
      <br />
      The "Reinstallment simulation" is triggered by button on top right side of
      page. It affect only the web page content.
      <br />
      <br />
      In the final screen in "Reinstallment simulation", or rather "System
      corruption simulation" feature I added personal comments about that. In
      order to view it the "Reinstallment simulation" must be run for the second
      time.
      <br />
      <br />
      After going through reinstallment simulation you can find following{' '}
      <b>corrupted features </b>inside the web page:
      <ol>
        <li style={{ margin: '10px 0' }}>
          <b>Distraction</b> - small red dot showing up on random parts of
          screan. (In this simulation it affects whole web page regardless where
          simulation was triggered)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>Hiding corruption</b> - red dot described above is visible in every
          part of web page apart of system reinstallation simulation screens.
          (In this simulation it affects whole web page regardless where
          simulation was triggered)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>
            Blocking selected actions, blocking further action upon selected
            previous one
          </b>{' '}
          - Movies list filtering: when typing hunt in "Title" fild the coursor
          is moved to "Year" field and it is impossible to type anything else in
          "Title" field. (In this simulation it affects selected part of web
          page regardless where simulation was triggered)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>Adding false part of screen: mask covering proper element </b>-
          "Add movie" button covered with box looking the same way. (In this
          simulation it affects selected part of web page regardless where
          simulation was triggered)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>Changing content</b> - shuffeled letters in main titles inside part
          of web page visible when "Turn on reinstallment simulation" button
          clicked. Single subpage is affected. (In this simulation it affects
          selected part of web page affected if simulation was triggered when
          being on this part of web page.)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>Catching system functionality and adding extra action </b>- When
          "Turn on reinstallment simulation" button is clicked for the 2nd time
          or more: the color of red dot moving on the screen will change
          randomly. (In this simulation it affects the dot regardless where
          simulation was triggered). Also when "Reinstallation simulation" is
          triggered from subpage, after finishing the reinstallation, when
          buttons are clicked (ones visible on the subpage the whole time,
          selected by "button" tag), the clicked button will change its color to
          random one upon clicking when being on subpage with buttons. (In this
          simulation it affects the buttons on subpage when simulation was
          triggered from subpage and till the subpage is open)
        </li>
        <li style={{ margin: '10px 0' }}>
          <b>Action by another application installed inside the system </b>-
          Header: reveals hidden "Response" pink box. (In this simulation it
          affects whole web page regardless where simulation was triggered. Also
          header is always visible.)
        </li>
      </ol>
      The changes in the system might be grouped by{' '}
      <b>ways of affecting system</b> (main points listed above), but also by
      <b> parts of system they affect</b> and{' '}
      <b>ways of triggering the changes</b> (information in brackets in list
      above) as well as{' '}
      <b>
        involvement of other corrupted applications listening for the signal to
        act{' '}
      </b>
      (described below).
      <br />
      <br />
      The main groups of changes listed above might affect whole web page or
      selected parts and can be triggered in different ways. Meaning, for
      example "Distraction" can also be used only for selected subpart of
      application, or triggered from inside. This is also valid for other
      features. In simulation for better visualization of nature of changes I
      only inlcuded selected few in this web page.
      <br />
      <br />
      <br />
      <b>Notice for developers</b>
      <br />
      <br />
      <ul>
        <li>
          In here I chose approach in coding which, in my opinion, resembled the
          most what I wanted to demonstrate. The features are divided into
          corresponding commits in Github repository.
        </li>
        <br />
        <li>
          I know that I could use variable in top component, signal the changes
          to offsprings components via contexts, props passing, localStorage
          changes or custom events firing and create proper features in
          listening offspring components. I used this approach only in "Action
          by another application installed inside the system" (point 7 in list
          above) as it corresponds to this case. In this situation the changes
          are done by another corrupted application installed in the system but
          only in response to proper signal from above, from system.
        </li>
        <br />
        <li>
          All other features I created using listening to signal and affecting
          the system on "App.js" level, what in my opinion resembles the
          situation with system corruption (points 1-6 in list above) when
          changes in application are triggered by the system, as system has the
          highest permissions and accesses available.
        </li>
        {/* catching system functionality in the middile and
      adding extra action */}
        <br />

        <li>
          I used timeouts or interval for triggering actions. Also in life the
          fact that something is corrupted not necessarly manifests from the
          start, and even if it does, it might be impossible to be cought
          especially when there is no comparison to proper functioning available
          and changes are impossible to be detected. It manifests itself when
          desired. And it also requires listening.
        </li>
        <br />
        <li>
          Importantly, triggered actions required knowledge about the target
          features. I could go by "id" but I went with general tag names and
          class names as it was possible to narrow actions using that.
        </li>
      </ul>
    </div>
  )
}

export default Introduction
