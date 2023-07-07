import React from 'react'
import { Link } from 'react-router-dom'

const books = require('../../../assets/images/books/books5.jpg')
const closed = require('../../../assets/images/books/closed2.jpg')

// https://www.w3schools.com/css/css3_border_images.asp

const MyBooksBoard = () => (
  <div className="books">
    <header>
      <h1 className="books__header">My Books</h1>
    </header>
    <section className="grid-container">
      <Link className="books-item grid-item" to="/my/books/list">
        <h2 className="books-item__header">List</h2>
        <p>
          This is the list of books which I have read together with some basic
          informations
        </p>
        <img
          alt="link to my book list"
          className="books-item__image"
          height="150"
          src={books}
          width="150"
        />
      </Link>
      <Link className="books-item grid-item" to="addBook">
        <h2 className="books-item__header">Add book to the list</h2>
        <p>Form to add new book to the list</p>
        <img
          alt="link to my book list"
          className="books-item__image"
          height="150"
          src={closed}
          width="150"
        />
      </Link>
    </section>
  </div>
)

export default MyBooksBoard
