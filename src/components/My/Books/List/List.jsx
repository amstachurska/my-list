import React, { useCallback, useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'

import MyBooksListHeaderFilter from './HeaderFilter'
import MyBooksListHeaderNames from './HeaderNames'
import MyBooksListItem from './Item'
import { Pagination } from '../../../Pagination/Pagination'

const MyBooksList = () => {
  const [sortSetting, setSortSetting] = useState({
    key: 'id',
    order: 'des',
  })
  const [shallUpdate, setShallUpdate] = useState(false)

  useEffect(() => {
    if (shallUpdate) {
      fetchBooks()
      setShallUpdate(false)
    }
  }, [shallUpdate])

  const [booksList, setBooksList] = useState([])
  const [filteredBooksList, setFilteredBooksList] = useState([])
  const [form, setForm] = useState({
    // id: 1,
    // title: 'title',
    // titlePl: ' titlepl',
    // author: 'author',
    // rating: 1,
    // language: ['pol'],
    // status: ['all'],
    // dateOfBeingRead: '2020-04-01',
    // isMovie: true,
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
    fetch('http://localhost:3001/books', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((booksData) => {
        setFilteredBooksList(booksData)
        setBooksList(booksData)
      })
      .catch((error) => console.log('error', error))
      .finally((data) => {})
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
  }

  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.type !== 'checkbox' ? e.target.value : e.target.checked
    const newForm = { ...form }
    console.log('newFirn', form)
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
      // console.log('form', form)
      let filteredBookList = [...booksList]
      if (!form || !filteredBookList) return
      const keys = Object.keys(form)
      keys.forEach((key) => {
        // console.log('keuy', key)
        if (
          form[key] === undefined ||
          form[key] === null ||
          form[key] === '' ||
          form[key] === [] ||
          (key === 'language' && form['language'] === 'all') ||
          (key === 'rating' && form['rating'] === 'all') ||
          (key === 'genre' && form['genre'].indexOf('all') !== -1)
          // (key === 'isSaga' && form['isSaga'] === 'all')
        ) {
          //continue
          return
        }
        for (let i = filteredBookList.length - 1; i >= 0; i--) {
          if (!filteredBookList[i].hasOwnProperty(key)) {
            filteredBookList.splice(i, 1)
          } else if (key === 'isSaga' || key === 'isAdaptation') {
            // console.log('cc', key, filteredBookList[i][key], form[key])
            filteredBookList[i][key] !== form[key] &&
              filteredBookList.splice(i, 1)
          } else if (
            filteredBookList[i][key] &&
            key !== 'status' &&
            filteredBookList[i][key]
              .toString()
              .toLowerCase()
              .indexOf(form[key].toString().toLowerCase()) === -1
          ) {
            // console.log('1', key)
            filteredBookList.splice(i, 1)
          } else if (
            key === 'status' &&
            form[key].filter(
              (item) =>
                filteredBookList[i][key]
                  .toString()
                  .toLowerCase()
                  .indexOf(item.toString().toLowerCase()) !== -1
            ).length === 0
          ) {
            // console.log(
            //   form[key].filter(
            //     (item) =>
            //       filteredBookList[i][key]
            //         .toString()
            //         .toLowerCase()
            //         .indexOf(item.toString().toLowerCase()) !== -1
            //   )
            // )
            // console.log('jeste tutak')
            filteredBookList.splice(i, 1)
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

  return (
    <>
      <h1
        className="books__title"
        style={{ marginBottom: '10px', marginLeft: '10px' }}
      >
        {' '}
        My Books
      </h1>{' '}
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
      {!filteredBooksList.length ? (
        <div>Loading...</div>
      ) : (
        <Pagination
          list={[...filteredBooksList]}
          setPaginatedBookList={setPaginatedBookList}
        />
      )}
    </>
  )
}

export default MyBooksList
