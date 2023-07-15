import React from 'react'

// nested routes
//https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import MyBooksRoots from './Books/Roots'
import MyMovies from './Movies/Movies'
import TodayILearnt from './programing/TodayILearnt'
import AnimeForm from '../../containers/anime/AnimeForm'
import MovieForm from './Movies/Form'
import AnimeList from '../../containers/anime/AnimeList'
import AnimeBoard from '../../containers/anime/Board'
import MangaList from '../../containers/manga/list/MangaList'
import MangaBoard from '../../containers/manga/Board'
import MangaAddEdit from '../../containers/manga/form/MangaAddEdit'

const MyRoots = ({ match }) => (
  <>
    <MyBooksRoots />
    <Switch>
      {/* <MybooksRoots /> */}
      <Route exact path="/my/movies" component={MyMovies} />
      <Route exact path="/my/movies/add" component={MovieForm} />
      <Route exact path="/my/movies/:id" component={MovieForm} />
      <Route exact path="/my/programming" component={TodayILearnt} />
      <Route exact path="/my/anime" component={AnimeBoard} />
      <Route exact path="/my/anime/add" component={AnimeForm} />
      <Route exact path="/my/anime/list" component={AnimeList} />
      {/* <Redirect from="/" to="/my/movies" />

      <Redirect from="/" to="/my/movies" /> */}
      {/* <Route exact path={`${match.path}/books`} component={MyBooks} />
    <Route exact path={`${match.path}/books/list`} component={MyBooksList} />
    <Route exact path={`${match.path}/books/addBook`} component={MyBooksForm} /> */}
      <Redirect from="/my/movies" to="/my/movies" />
      <Route exact path="/my/manga" component={MangaBoard} />
      <Route exact path="/my/manga/list" component={MangaList} />
      <Route
        exact
        path={['/my/manga/add', '/my/manga/:id']}
        component={MangaAddEdit}
      />
    </Switch>
  </>
)

export default withRouter(MyRoots)
