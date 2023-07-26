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
        proper links in 'README' file in the future if I would be able to find
        these items again.
      </p>
      <h2
        style={{ marginBottom: '10px', marginLeft: '10px', marginTop: '30px' }}
      >
        Reinstallment simulation
      </h2>
      I this page I also created Reinstallment simulation.
      <br />
      It is triggered by button on top right side of page. After going through
      reinstallment simulation you can find following corrupted features inside
      the page:
      <ol>
        <li>
          Triggers whole web page regardless where simulation was triggered
          <ul>
            <li>
              <b>Distraction</b> - small red dot showing up on random parts of
              screan
            </li>
            <li>
              <b>Hiding corruption</b> - red dot described above is visible in
              every part of web page apart of system reinstallation simulation
              screens
            </li>
          </ul>
        </li>
        <li>
          Triggers selected part of web page regardless where simulation was
          triggered
          <ul>
            <li>
              <b>Blocking further action upon selected previous one</b> - Movies
              list filtering: when typing hunt in "Title" fild the coursor is
              moved to "Year" field and it is impossible to type anything else
              in "Title" field.
            </li>
            <li>
              <b>Adding false part of screen: mask covering proper element </b>-
              "Add movie" button covered with box looking the same way
            </li>
          </ul>
        </li>
        <li>
          Triggers selected part of web page affected if simulation was
          triggered when being on this part of web page
          <ul>
            <li>
              <b>Changing content</b> - shuffeled letters in main titles inside
              part of web page visible when "Turn on reinstallment simulation"
              button clicked (single subpage affected)
            </li>
          </ul>
          <li>
            <b>Catching system functionality and adding extra action </b>- When
            clicking on some buttons (selected by "button" tag), the button will
            randomly change its color as well as the color of the dot.
          </li>
          <br />
        </li>
        <li>
          <b>Action by another application installed inside the system </b>-
          Header: reveals hidden "Response" pink box
        </li>
      </ol>
      {/* <br /> When "Turn on reinstallment simulation" button clicked for the 2nd time and
      higher: random dot will stay in one place, its color will change randomly,
      and new red dot moving randomly will appear; when some buttons (selected
      by "button" tag) are clicked, the ones which are visible on the subpage
      the whole time, the clicked button will change its color to random one
      when being on page with buttons, the color of button will change randomly
      and color of dot will also change. */}
      <br />
      In here I chose approach in coding which, in my opinion, resembled the
      most what I wanted to demonstrate. The features are divided into
      corresponding commits in Github repository.
      <br />
      I know that I could use variable in top component and signal the changes
      to children components in all features via contexts, props passing,
      localStorage changes or custom events firing. I used this approach only in
      "action by another application installed inside the system" (point 4 in
      list above) as it corresponds to this case.
      <br />
      All other features are done from "App.js" level, what in my opinion
      resembles better the situation with system corruption (points 1-3 in list
      above).
      {/* The ones in here are: distraction, hiding suggestion proper
      system, changing content, catching system functionality in the middile and
      adding extra action and masks covering proper elements, blocking selected
      actions. */}
      <br />
      <br />
      I used "timeouts" or "interval" for triggering actions. Also in life the
      fact that something is corrupted not necessarly manifests from the start,
      and even if it does it might be impossible to be cought especially when
      there is no comparison and changes are impossible to be detected. It
      manifests itself when desired. And it also requires listening.
      <br />
      Importantly, triggered actions required knowledge about the target
      features. I could go by "id" but I went with general tag names and class
      names as it was possible to narrow actions using that.
      <br />
      <br />
      In final screen in "System corruption simulation" feature I added personal
      comments about that.
    </div>
  )
}

export default Introduction
