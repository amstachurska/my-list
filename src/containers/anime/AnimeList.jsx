import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { List, Descriptions, Collapse, Select, Spin } from 'antd'
import { genreOptions } from './constans'
// import { useDispatch } from 'react-redux'

const { Panel } = Collapse
const { Option } = Select

const AnimeList = () => {
  // const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const [genreField, setGenreField] = useState([])
  // const dispatchAction = useDispatch()
  const children = useMemo(
    () =>
      genreOptions.map((genre) => (
        <Option value={genre} key={genre}>
          {genre}
        </Option>
      )),
    []
  )

  useEffect(() => {
    setLoading(true)
    const data = fetch('http://localhost:3001/anime', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((animes) => {
        // console.log('animes', animes)
        animes && setData(animes)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }, [])

  const filterData = (value) => {
    let updatedList = []
    console.log('value', value)
    console.log('data', data)
    // if (!value.length) return data
    if (!genreField.length) {
      updatedList = [...data]
    } else if (value.length > genreField.length) {
      updatedList = list.filter((genre) => genreField.indexOf(genre) !== -1)
    } else {
      updatedList = data.filter((genre) => genreField.indexOf(genre) !== -1)
    }
    setList(updatedList)
    setGenreField(value)
  }

  if (loading) return <Spin size="large" style={{ margin: '50px 40vw' }} />
  if (!data) return <h1>No data</h1>
  return (
    <>
      <header style={{ width: '100vw' }}>
        <Select
          style={{ width: '100%' }}
          allowClear
          mode="multiple"
          placeholder="Genre"
          onChange={filterData}
        >
          {children}
        </Select>
      </header>
      <List
        itemLayout="vertical"
        dataSource={data}
        size="large"
        pagination={{
          // onChange: page => {},
          pageSize: 5,
        }}
        renderItem={(anime) => (
          <List.Item key={anime.id}>
            <List.Item.Meta
              title={<a href="/">{anime.title}</a>}
              description={anime.opinion}
            ></List.Item.Meta>
            <br />
            <div>
              <Collapse>
                <Panel>
                  <Collapse>
                    <Panel header={anime.title}>
                      <Descriptions title="Genres" bordered>
                        <ul>
                          {anime?.genres?.length > 0 &&
                            anime.genres.map((genre, index) => (
                              <Descriptions.Item
                                key={`${anime.id}-genre-${index}`}
                                column={2}
                                contentStyle={{
                                  display: 'inline-block',
                                  backgroundColor: 'yellow',
                                  margin: '10px',
                                }}
                                labelStyle={{
                                  backgroundColor: 'red',
                                  margin: '10px',
                                }}
                                label={`Genres-${index}`}
                              >
                                <span
                                  style={{
                                    display: 'inline-block',
                                    border: '1px solid black',
                                    margin: '8px',
                                    padding: '4px 8px',
                                    borderRadius: '8px',
                                    backgroundColor: 'pink',
                                  }}
                                >
                                  {genre}
                                </span>
                              </Descriptions.Item>
                            ))}
                        </ul>
                      </Descriptions>
                      <Collapse>
                        <Panel header="opinion">
                          <Descriptions title="Ranking">
                            <Descriptions.Item>
                              {anime?.ranking}
                            </Descriptions.Item>
                          </Descriptions>
                          <Descriptions title="Opinion">
                            <Descriptions.Item>
                              {anime?.opinion}
                            </Descriptions.Item>
                          </Descriptions>
                          <Descriptions title="Date of completed">
                            <Descriptions.Item>{anime?.date}</Descriptions.Item>
                          </Descriptions>
                        </Panel>
                      </Collapse>
                      <Collapse>
                        <Panel header="Episodes">
                          <Descriptions layout="vertical">
                            {anime.episodes &&
                              anime?.episodes?.length > 0 &&
                              anime.episodes.map((season, index) => (
                                <Fragment key={`${anime.id}-episodes-${index}`}>
                                  <Descriptions.Item label="season">
                                    {season.season || '-'}
                                  </Descriptions.Item>
                                  <Descriptions.Item label="Specials">
                                    {season.specials || '-'}
                                  </Descriptions.Item>
                                  <Descriptions.Item label="Nr of episodes">
                                    {season?.nrOfEpisodes}
                                  </Descriptions.Item>
                                  <Descriptions.Item label="Status">
                                    {season?.status}
                                  </Descriptions.Item>
                                </Fragment>
                              ))}
                          </Descriptions>
                        </Panel>
                      </Collapse>
                      <Collapse>
                        <Panel header="Creators">
                          <Descriptions
                            title="Anime creators"
                            layout="vartical"
                          >
                            <Descriptions.Item label="Studio">
                              {anime?.studio}
                            </Descriptions.Item>
                            <Descriptions.Item label="Authors">
                              {anime?.author?.length > 0
                                ? anime.author.map((author, index) => (
                                    <span key={`${anime.id}-author-${index}`}>
                                      {author}
                                    </span>
                                  ))
                                : '-'}
                            </Descriptions.Item>
                            <Descriptions.Item label="Music">
                              {anime?.music?.length > 0
                                ? anime.music.map((musicAuthor, index) => (
                                    <span
                                      key={`${anime.id}-music-author-${index}`}
                                    >
                                      {musicAuthor}
                                    </span>
                                  ))
                                : '-'}
                            </Descriptions.Item>
                            <Descriptions.Item label="Director">
                              {anime?.director?.length > 0
                                ? anime.director.map((director, index) => (
                                    <span key={`${anime.id}-director-${index}`}>
                                      {director}
                                    </span>
                                  ))
                                : '-'}
                            </Descriptions.Item>
                          </Descriptions>
                        </Panel>
                      </Collapse>
                    </Panel>
                  </Collapse>
                </Panel>
              </Collapse>
            </div>
          </List.Item>
        )}
      ></List>
    </>
  )
}

export default AnimeList
