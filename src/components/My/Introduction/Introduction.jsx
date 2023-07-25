import React from 'react'

const Introduction = () => {
  return (
    <p
      style={{
        width: '80vw',
        margin: '120px auto',
        border: '3px solid green',
        padding: '24px',
        borderRadius: '5px',
        backgroundColor: '#c9f7be',
      }}
    >
      This page contains lists of IT links with description as well as lists of
      movies and anime I watched and books I read in 2020-2021.
      <br />
      <br />
      This is an web page which I mainly developed in 2020-2021. I created in to
      boost my skills. I was interested mainly in services and store as usually
      during working in company these features are set up at the beginning and
      work is based on that. I wanted to create page containing these features
      from the scratch, I used json-server for backend simulation to ge able to
      create API calls.
      <br />
      <br />
      During my work when I was doing assigned tasks and searching web for help
      I usually came accross valuable informations which helped me with tasks. I
      started to sent links to those to myself and I after some time I thought
      that it would be worth to go through these links to try to recall it and
      express in my words (usually) what it tought me. That would improve and
      consolidate my knowledge. Moreover, in that way I would be able to get
      information when facing similar problem in the future.
      <br />
      <br />I also wanted to same some impressions about books, movies and anime
      which I watched. Still, I created in for myself and I did not aim to
      publish it at that time. So I wrote 'remarks' for myself, therefore they
      look this way. Similarly with descriptions in 'articles' section.
      <br />
      <br />
      <b>
        In production (when viewing this page using url adress) please navigate
        only using buttons inside the web page. Typing inside url will not work
        in the same way.
      </b>
      <br />
      <br />I do not own rights for various graphics included. I will try to
      provide proper links in read me in the future if I would be able to find
      that again.
      <br />
      <br />
      <br />I also included Reinstallment simulation.
      <br />
      In here I chose approach in coding which for me resembled the most what I
      wanted to demonstrate. The features are dividided into commits in Github
      repository.
      <br />
      I know that I could use variable in top component and signal the changes
      to children components in all features via contexts, props passing,
      localStorage changes or custom events firing. I used only in changes
      included in commit entitled 'system corruption simulation - action by
      another application installe… …d inside the system' as it corresponded to
      what I wanted to demonstrated in this case.
      <br />
      All other features are done from App.js level, what in my opinion
      corresponds the best to problem with system corruption. The ones in here
      are: distraction, hiding suggestion proper system, changing content,
      catching system functionality in the middile and adding extra action and
      masks covering proper elements, blocking selected actions.
      <br />
      I used 'timeouts' or 'interval' for triggering actions. Also in life the
      fact that something is corrupted not necessarly manifests from the start,
      and even if it does it might be impossible to be cought especially when
      there is no comparison and changes are impossible to be detected. It
      manifests itself when desired.
      <br />
      Importantly, triggered actions required knowledge about the target
      features. I could go by 'id' but I went with general tag names and class
      names as it was possible to narrow actions using that.
      <br />
      In final screen in 'system corruption simulation' feature I added personal
      comments about that.
    </p>
  )
}

export default Introduction
