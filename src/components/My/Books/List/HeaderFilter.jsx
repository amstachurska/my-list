import React from 'react'

const MyBooksListHeaderFilter = ({ form, handleChange, handleKeyDown }) => {
  return (
    <tr>
      <th className="books-table__header-element -no">
        {/* <input
          name="id"
          onChange={handleChange}
          type="number"
          value={form.id}
        ></input> */}
      </th>
      <th className="books-table__header-element -title">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          value={form.title}
        ></input>
      </th>
      <th className="books-table__header-element -titlePl">
        <input
          name="titlePl"
          onChange={handleChange}
          type="text"
          value={form.titlePl}
        ></input>
      </th>
      <th className="books-table__header-element -author">
        <input
          name="author"
          onChange={handleChange}
          type="text"
          value={form.author}
        ></input>
      </th>
      <th className="books-table__header-element -rating">
        <select
          name="rating"
          type="select"
          onChange={handleChange}
          value={form.rating}
        >
          <option value="all">All</option>
          <option value="1">☆</option>
          <option value="2">☆☆</option>
          <option value="3">☆☆☆</option>
          <option value="4">☆☆☆☆</option>
          <option value="5">☆☆☆☆☆</option>
        </select>
      </th>
      <th className="books-table__header-element -language">
        <select
          name="language"
          type="select"
          onChange={handleChange}
          value={form.language}
        >
          <option value="all">All</option>
          <option value="eng">English</option>
          <option value="pol">Polish</option>
        </select>
      </th>
      <th className="books-table__header-element -isRead">
        <select
          name="status"
          id="status"
          onChange={handleChange}
          // onClick={console.log('klikam')}
          // onMouseDown={console.log('mouse dowj')}
          //onKeyDown={handleKeyDown('down')}
          // onKeyUp={handleKeyDown('up')}
          type="select"
          multiple
          value={form.status}
        >
          <option value="toRead">Not started</option>
          <option value="done">Finished</option>
          <option value="inProgress">In Progress</option>
        </select>
      </th>
      <th className="books-table__header-element -dateOfReading">
        <input
          name="dateOfBeingRead"
          onChange={handleChange}
          type="date"
          value={form.dateOfBeingRead}
        ></input>
      </th>
      <th className="books-table__header-element -genre">
        <select
          multiple
          name="genre"
          id="genre"
          value={form.genre}
          onChange={handleChange}
        >
          <option value="all">All</option>
          <option value="aliens">Aliens</option>
          <option value="art">Art</option>
          <option value="clasic">Classic</option>
          <option value="crime">Crime story</option>
          <option value="ecology">Ecology</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="knights">Knights</option>
          <option value="religious">Religious</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Science fiction</option>
          <option value="space">Space</option>
          <option value="superpower">Superpower</option>
        </select>
      </th>
      <th className="books-table__header-element -isMovie">
        <input
          name="isAdaptation"
          onChange={handleChange}
          type="checkbox"
          checked={form.isAdaptation}
        ></input>
      </th>
      <th className="books-table__header-element -isSaga">
        <input
          name="isSaga"
          onChange={handleChange}
          type="checkbox"
          checked={form.isSaga}
        ></input>
        {/* <select
          name="isSaga"
          id="isSaga"
          onChange={handleChange}
          type="select"
          multiple
          value={form.isSaga}
        >
          <option value="all">All</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select> */}
      </th>
      <th className="books-table__header-element"></th>
    </tr>
  )
}

export default MyBooksListHeaderFilter
