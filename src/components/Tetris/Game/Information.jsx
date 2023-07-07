import React, { Component } from 'react'

class TetrisGameInformation extends Component {
  render() {
    return (
      <section class="tetrisLeft">
        <div class="tetris_header">
          <h2 class="tetris_points">Points: 0</h2>
        </div>
        <div class="tetris_button_container">
          <h2 class="tetris_button_container_title">Magic buttons</h2>
          <button class="tetris__button --rotate">Rotate tetris</button>
          <button class="tetris__button --keys">Change keys</button>
          <button class="tetris__button -slow-down">Slow down</button>
        </div>
        <div class="tetrisInfo">
          <p class="tetrisInfo_text"></p>
        </div>
      </section>
    )
  }
}
export default TetrisGameInformation
