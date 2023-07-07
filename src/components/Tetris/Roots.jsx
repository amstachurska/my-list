import React from 'react'

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import TetrisGameInformation from './Game/Information'
import TetrisIntroduction from './Introduction/Introduction'
import TetrisRewardBoard from './Reward/Board'
import withTitle from './Introduction/withTitle'

const TetrisIntroductionWithTitle = withTitle(
  TetrisIntroduction,
  'Welcome in Tetris'
)

const TetrisRoots = ({ match }) => {
  
  return (
    <Switch>
      <Route
        exact
        path={`${match.path}/introduction`}
        component={TetrisIntroductionWithTitle}
      />
      <Route
        exact
        path={`${match.path}/game`}
        component={TetrisGameInformation}
      />
      <Route
        exact
        path={`${match.path}/reward`}
        component={TetrisRewardBoard}
      />
      <Redirect from="*" to="/tetris/introduction"></Redirect>
    </Switch>
  )
}
export default withRouter(TetrisRoots)
