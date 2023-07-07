import React from 'react'
import { useHistory } from 'react-router-dom'
import Badge from '../../../common/Bagde'
import { get } from 'lodash'

const MoviesItem = ({ movie }) => {
  const history = useHistory()
  const handleStatus = (status) => {
    switch (status) {
      case 'watched':
        return 'watched'
      case 'inProgress':
        return 'Watching'
      case 'toWatch':
        return 'to watch'
      default:
        return 'to watch'
    }
  }

  const handleGenre = (genres) => {
    // const genresList =  genres ? genres.map((genre) => (<li className={`badge -~${genre}`} >{genre}</li>) ) : null
    const genresList = genres
      ? genres.map((genre) => (
          <li className={`list-items_map badge${genre}`} key={genre}>
            <Badge className={genre} content={genre} />
          </li>
        ))
      : null

    return genresList
  }
  return (
    <tr
      className="movies-list-item"
      onClick={() => history.push(`/my/movies/${movie.id}`)}
    >
      <td className="movies-list-item__id item--small">{movie.id}</td>
      <td className="item--medium">{get(movie, 'title', '-')}</td>
      <td className="item--medium">{get(movie, 'titlePl', '-')}</td>
      <td className="item--small">{get(movie, 'year', '-')}</td>
      <td className="item--big">
        {/* {get(movie, 'cathegory', '-')} */}
        {handleGenre(movie.cathegory)}
      </td>
      <td className="item--small">
        {/* {get(movie, 'status', '-')} */}

        <Badge
          className={handleStatus(movie.status)
            .split(' ')
            .join('')
            .toLowerCase()}
          content={handleStatus(movie.status)}
        />
      </td>
      <td className="item--medium">{get(movie, 'date', '-')}</td>
      <td className="item--small">{get(movie, 'ranking', '-')}</td>
      <td className="item--small">
        {get(movie, 'isWorthWatchingAgain') ? 'Yes' : 'No' || '-'}
      </td>
      <td className="item--small">{get(movie, 'nrOfTimesWatched', '0')}</td>
      <td className="item--big">{get(movie, 'remarks', '-')}</td>
    </tr>
  )
}

export default MoviesItem
