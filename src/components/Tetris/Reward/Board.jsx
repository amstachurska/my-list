import React, { Component } from 'react'

class TetrisRewardBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      joke: '',
      isFetching: false,
    }
  }

  componentDidMount() {
    this.fetchJoke()
  }

  handleJoke = () => {
    this.setState({ ...this.state, isFetching: true })
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          joke: data.value,
          isFetching: false,
        })
      })
      .catch(error => {
        this.setState({
          joke: 'No joke for you',
          isFetching: false,
        })
      })
  }
  fetchJoke = this.handleJoke

  render() {
    return (
      <section className="reward">
        <h1 className="reward__title">Congratulations</h1>
        <div className="reward-summary">
          <p className="reward-summary__points"></p>
          <p className="reward-summary__text"></p>
          <p className="reward-summary__description">
            A random <b>Chuck Norris</b> joke!
          </p>
          <p className="reward-summary__joke">{this.state.joke}</p>
        </div>
      </section>
    )
  }
}

export default TetrisRewardBoard
