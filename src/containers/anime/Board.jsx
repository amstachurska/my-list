import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const chidori = require('../../assets/images/anime/kakashi_knife.jpg')
const anbu = require('../../assets/images/anime/kakashi__anbu.png')
// const book = require('../../assets/images/anime/kakashi__book.png')

const AnimeBoardStyled = styled.section`
  background-color: #fd976e;
  border: 2px solid orange;
  border-radius: 25px;
  margin: 70px auto;
  padding: 50px;
  width: 80vw;

  .anime-board__title {
    padding: 20px;
    text-align: center;
    text-decoration: underline;
  }

  .anime-board__list {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }

  .anime-board__item {
    align-self: stretch;
    background-color: #d41f1f;
    border: 1px solid #234567;
    border-radius: 15px;
    margin: 10px;
    padding: 20px;
  }

  .anime-board__link {
    color: #234567;
  }

  .anime-board__link-header {
    color: unset;
    text-align: center;
  }
`

const Board = () => {
  return (
    <AnimeBoardStyled>
      <h1 className="anime-board__title">Anime</h1>
      <ul className="anime-board__list">
        <li className="anime-board__item">
          <Link className="anime-board__link" to="/my/anime/list">
            <h2 className="anime-board__link-header">Anime list</h2>
            <p className="anime-board__link-text">
              This is a link to list of watched anime
            </p>
            <img alt="Anime list link decoration" width="350" src={chidori} />
          </Link>
        </li>
        {/* <li className="anime-board__item">
          <Link className="anime-board__link" to="/my/anime/add">
            <h2 className="anime-board__link-header">Add new anime</h2>
            <p className="anime-board__link-text">
              Here you can add anime to the list
            </p>
            <img alt="Add anime link decoration" width="250" src={anbu} />
          </Link>
        </li> */}
      </ul>
    </AnimeBoardStyled>
  )
}

export default Board
