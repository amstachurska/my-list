import React from 'react'

import { Link } from 'react-router-dom'

import anime from '../../assets/images/anime/fate1.jpg'

//tu wstawic linki z routera
// wstawianie img
//https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

const manga = require('../../assets/images/manga/manga1.jpg')
const movie = require('../../assets/images/movies/movies1.jpg')
const series = require('../../assets/images/series/series2.jpg')
const tetris = require('../../assets/images/pockemons/pokemon1.jpg')
const documents = require('../../assets/images/documents/cezanne.jpg') //TOBE CHANGED
const art = require('../../assets/images/documents/riffian.jpg')
const cosmetics = require('../../assets/images/cosmetics/honey.jpg')

const HeaderComplete = () => {
  return (
    <header className="header" style={{ animation: `fadeIn 2s` }}>
      <nav className="header-group">
        <h2 className="header-group__title">My</h2>
        <ul className="header-group-nav">
          <li className="header-group-nav__item">
            <Link to="/my/books">
              <img
                alt="link to my books list"
                className="header-group-nav__item-img"
                height="75"
                src={require('../../assets/images/books/books2.jpg')}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="/my/anime">
              <img
                alt="link to my anime list"
                className="header-group-nav__item-img"
                height="75"
                src={anime}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="/my/manga">
              <img
                alt="link to my manga list"
                className="header-group-nav__item-img"
                height="75"
                src={manga}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            {/* jak zrobie link to='my/movies bez slasha to robi sciezke wzgledna to wazne!!! tzn doklada tyam gdzie bylam' */}
            <Link to="/my/movies">
              <img
                alt="link to my movie list"
                className="header-group-nav__item-img"
                height="75"
                src={movie}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="#">
              <img
                alt="link to my movie list"
                className="header-group-nav__item-img"
                height="75"
                src={series}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="#">
              <img
                alt="link to my documents"
                className="header-group-nav__item-img"
                height="75"
                src={documents}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="#">
              <img
                alt="link to my art galery"
                className="header-group-nav__item-img"
                height="75"
                src={art}
                width="75"
              />
            </Link>
          </li>
          <li className="header-group-nav__item">
            <Link to="#">
              <img
                alt="link to my cosmetics"
                className="header-group-nav__item-img"
                height="75"
                src={cosmetics}
                width="75"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="header-group">
        <h2 className="header-group__title">Games</h2>
        <ul className="header-group-nav">
          <li className="header-group-nav__item">
            <Link to="/tetris">
              <img
                alt="link to my tetris game"
                className="header-group-nav__item-img"
                height="75"
                src={tetris}
                width="75"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComplete
