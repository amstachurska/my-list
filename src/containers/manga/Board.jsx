import React from 'react'
import { Link } from 'react-router-dom'

const Board = () => (
  <section className="manga">
    <ul className="manga__list">
      <li className="manga__item" key="manga-list">
        <Link className="manga__link" to="/my/manga/list">
          Manga list
        </Link>
      </li>
      <li className="manga__item" key="manga-item">
        <Link className="manga__link" to="/my/manga/add">
          Add new manga
        </Link>
      </li>
    </ul>
  </section>
)

export default Board
