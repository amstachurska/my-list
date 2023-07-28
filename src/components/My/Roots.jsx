import React from 'react'

// nested routes
//https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import TodayILearnt from './programing/TodayILearnt'
import MovieForm from './Movies/Form'
import AnimeList from '../../containers/anime/AnimeList'
import AnimeBoard from '../../containers/anime/Board'
import Introduction from './Introduction/Introduction'
import MyBooksBoard from './Books/Board'
import MyBooksList from './Books/List/List'
import AddEditBook from './Books/Form/AddEditBook'
import MoviesWrapper from './Movies/MoviesWrapper'

const MyRoots = ({ match }) => (
  <>
    <Switch>
      <Route exact path={`${match.path}/books`} component={MyBooksBoard} />
      <Route
        exact
        path={`${match.path}/books/board`}
        component={MyBooksBoard}
      />
      <Route exact path={`${match.path}/books/list`} component={MyBooksList} />
      <Route exact path={`${match.path}/books/add`} component={AddEditBook} />
      {/* <Route exact path="/my/books/addBook" component={MyBooksForm} /> */}
      <Route exact path={`/my/books/:id`} component={AddEditBook} />
      <Route exact path="/my/introduction" component={Introduction} />
      <Route exact path="/my/movies" component={MoviesWrapper} />
      <Route exact path="/my/movies/add" component={MovieForm} />
      <Route exact path="/my/movies/:id" component={MovieForm} />
      <Route exact path="/my/programming" component={TodayILearnt} />
      <Route exact path="/my/anime" component={AnimeBoard} />
      {/* <Route exact path="/my/anime/add" component={AnimeForm} /> */}
      <Route exact path="/my/anime/list" component={AnimeList} />
      <Redirect from="/" to="/my/introduction" />

      {/* <Redirect from="/" to="/my/movies" /> */}
      {/* <Route exact path={`${match.path}/books`} component={MyBooks} />
    <Route exact path={`${match.path}/books/list`} component={MyBooksList} />
    <Route exact path={`${match.path}/books/addBook`} component={MyBooksForm} /> */}

      {/* <Redirect from="/my/movies" to="/my/movies" /> */}
    </Switch>
  </>
)

export default withRouter(MyRoots)
