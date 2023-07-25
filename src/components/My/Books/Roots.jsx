import React from 'react'

// nested routes
//https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5

import { Redirect, Route, Switch, withRouter } from 'react-router-dom'

import MyBooksBoard from './Board'
import MyBooksList from './List/List'
import AddEditBook from './Form/AddEditBook'

const MyBooksRoots = ({ match }) => (
  <Switch>
    <Route exact path={`${match.path}/books`} component={MyBooksBoard} />
    <Route exact path={`${match.path}/books/board`} component={MyBooksBoard} />
    <Route exact path={`${match.path}/books/list`} component={MyBooksList} />
    <Route exact path={`${match.path}/books/addBook`} component={AddEditBook} />
    {/* <Route exact path="/my/books/addBook" component={MyBooksForm} /> */}
    <Route exact path={`/my/books/:id`} component={AddEditBook} />
  </Switch>
)

export default withRouter(MyBooksRoots)
