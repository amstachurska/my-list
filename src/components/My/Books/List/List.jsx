import React, { useCallback, useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import { useHistory } from 'react-router'

import MyBooksListHeaderFilter from './HeaderFilter'
import MyBooksListHeaderNames from './HeaderNames'
import MyBooksListItem from './Item'
import { Pagination } from '../../../Pagination/Pagination'

let books = require('../books.json')

const MyBooksList = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(true)

  const [sortSetting, setSortSetting] = useState({
    key: 'id',
    order: 'des',
  })
  const [shallUpdate, setShallUpdate] = useState(false)

  useEffect(() => {
    if (shallUpdate) {
      fetchBooks()
    }
  }, [shallUpdate])

  const [booksList, setBooksList] = useState([])
  const [filteredBooksList, setFilteredBooksList] = useState([])
  const [form, setForm] = useState({
    id: undefined,
    title: '',
    titlePl: '',
    author: '',
    rating: undefined,
    language: 'pol',
    status: ['done', 'inProgress'],
    dateOfBeingRead: undefined,
    isAdaptation: undefined,
    isSaga: undefined,
    genre: [],
  })
  // const [isShiftPressed, setIsShiftPressed] = useState(false)

  const [paginatedBookList, setPaginatedBookList] = useState([])

  const fetchBooks = () => {
    setIsLoading(true)
    if (process.env.NODE_ENV === 'production') {
      setBooksList(JSON.parse(JSON.stringify(books.books)))
      setFilteredBooksList(JSON.parse(JSON.stringify(books.books)))
      setShallUpdate(false)
      setIsLoading(false)
    } else {
      fetch(`${process.env.REACT_APP_API_URL}/books`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((booksData) => {
          setFilteredBooksList([...booksData])
          setBooksList([...booksData])
        })
        .catch((error) => console.log('error', error))
        .finally((data) => {
          setShallUpdate(false)
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const onHeaderClick = (keyType) => {
    let order = 'asc'
    // console.log('klok', keyType)
    const listOfEmpty = filteredBooksList.filter(
      (book) => !book.hasOwnProperty(keyType)
    )
    let listOfBooksWithValue = filteredBooksList.filter((book) =>
      book.hasOwnProperty(keyType)
    )
    listOfBooksWithValue = listOfBooksWithValue.sort((book1, book2) =>
      book1[keyType] > book2[keyType] ? 1 : -1
    )

    if (sortSetting.key === keyType) {
      order = sortSetting.order === 'des' ? 'asc' : 'des'
      order === 'des' && listOfBooksWithValue.reverse()
    }

    const filteredBooks = [...listOfBooksWithValue, ...listOfEmpty]
    setBooksList(filteredBooks)
    setFilteredBooksList(filteredBooks)
    setSortSetting({
      key: keyType,
      order: order,
    })
    console.log('ustawiam', filteredBooks)
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.type !== 'checkbox' ? e.target.value : e.target.checked
    const newForm = { ...form }
    //console.log('newFirn', form)
    // console.log('v', value)
    // console.log('e.tage2', e.target.checked)
    // console.log('n', e.target.type)
    //console.log('jestem', newForm[name])

    //dopisac   z przycisnietym shiftem
    //zrobic prawidowe filtrowanie dla multiselekta
    // dopisac wybieranie autora z selekta
    // dopisac jak jest zaznaczony ze jest film to mozna wybrac z listy
    // dopisac mape w selekcie done na "przeczytane"
    if (e.target.multiple) {
      if (newForm[name].indexOf(value) !== -1) {
        newForm[name] = newForm[name].filter(
          (field) => field !== e.target.value
        )
        //console.log(newForm[name].filter((field) => field !== e.target.value))
      } else {
        newForm[name].push(value)
      }
    } else {
      newForm[name] = value
    }

    setForm({ ...newForm })
    filterBookList(newForm)
  }

  const filterBookList = useCallback(
    (form) => {
      let filteredBookList = [...booksList]
      if (!form || !filteredBookList) return
      const keys = Object.keys(form)
      keys.forEach((key) => {
        if (
          form[key] === undefined ||
          form[key] === null ||
          form[key] === '' ||
          form[key] === [] ||
          (key === 'language' && form['language'] === 'all') ||
          (key === 'rating' && form['rating'] === 'all') ||
          (key === 'genre' && form['genre'].indexOf('all') !== -1)
        ) {
          return
        }
        for (let i = filteredBookList.length - 1; i >= 0; i--) {
          if (!filteredBookList[i].hasOwnProperty(key)) {
            filteredBookList.splice(i, 1)
          } else if (key === 'isSaga' || key === 'isAdaptation') {
            filteredBookList[i][key] !== form[key] &&
              filteredBookList.splice(i, 1)
          } else if (
            filteredBookList[i][key] &&
            key !== 'status' &&
            key !== 'genre' &&
            filteredBookList[i][key]
              .toString()
              .toLowerCase()
              .indexOf(form[key].toString().toLowerCase()) === -1
          ) {
            filteredBookList.splice(i, 1)
          } else if (key === 'status' && filteredBookList[i][key]) {
            if (
              form[key].every(
                (keyValue) =>
                  filteredBookList[i][key]
                    .toLowerCase()
                    .indexOf(keyValue.toLowerCase()) === -1
              )
            ) {
              filteredBookList.splice(i, 1)
            }
          } else if (key === 'genre' && filteredBookList[i][key]) {
            if (
              form[key].some(
                (keyValue) => filteredBookList[i][key].indexOf(keyValue) === -1
              )
            ) {
              filteredBookList.splice(i, 1)
            }
          }
        }
      })
      setFilteredBooksList([...filteredBookList])
    },
    [booksList]
  )

  useEffect(() => {
    filterBookList()
  }, [booksList, filterBookList])

  const handleShift = (type) => (e) => {
    //console.log('jestem w key dpwn', e.key, type)
    if (e.key === 'Shift') {
    }
  }
  if (shallUpdate) return <div>Loading...</div>
  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <h1
        className="books__title"
        style={{ marginBottom: '10px', marginLeft: '10px' }}
      >
        {' '}
        My Books
      </h1>
      <button
        className="add-book"
        onClick={() => history.push('/my/books/add')}
      >
        Add new book
      </button>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/my">My</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/my/books">Books</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Book List</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <table>
        {/* <caption>Books</caption> */}
        <thead>
          <MyBooksListHeaderNames
            onHeaderClick={onHeaderClick}
            sortSetting={sortSetting}
          />
          <MyBooksListHeaderFilter
            handleChange={handleChange}
            form={form}
            handleKeyDown={handleShift}
          />
        </thead>

        <tbody>
          {paginatedBookList.map((book) => (
            <MyBooksListItem
              key={`book-${book.id}`}
              book={book}
              setShallUpdate={setShallUpdate}
            />
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Pagination
          list={filteredBooksList}
          setPaginatedBookList={setPaginatedBookList}
        />
      )}
    </>
  )
}

export default MyBooksList
