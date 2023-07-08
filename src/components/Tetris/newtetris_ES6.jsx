document.addEventListener('DOMContentLoaded', function () {
  class Game {
    constructor(setWidth, setHeight) {
      this.boardContainer = document.querySelector('section#tetris') // container of all elements
      this.width = setWidth // setting the game width - number of elements in wrow based on User settings
      this.height = setHeight //setting of game height - number of elements in column based on User setting
      this.points = 0 // number of points scored by User dugin the game
      this.elementTable = [
        [[1], [1], [1], [1]],
        [
          [1, 1],
          [1, 1],
        ],
        [
          [1, 0],
          [1, 1],
          [1, 0],
        ],
        [
          [0, 1, 0],
          [1, 1, 1],
          [0, 1, 0],
        ],
        [
          [0, 1, 1],
          [1, 1, 0],
        ],
        [
          [1, 1, 0],
          [0, 1, 1],
        ],
        [
          [1, 0, 0],
          [1, 1, 1],
        ],
        [
          [0, 0, 1],
          [1, 1, 1],
        ],
        [[1]],
      ] // table of items dropping down during the game
      this.positionX = Math.floor(Number(setWidth / 2)) //posiition X of item
      this.positionY = 0 // position Y of item
      this.element = null // dropping-down element
      this.isSwitchedSideKeys = false //condition showing whether the keys are switched (rotate and switch buttons)
      this.slowDownTimesToUse = 4 // limiter for slow-down button ti be used
      this.isFinished = false // states whether game is finished
    }

    createBoard() {
      this.boardContainer.style.width = String(this.width * 20) + 'px'
      this.boardContainer.style.height = String(this.height * 20) + 'px'
      const numberOfElements = this.width * this.height
      for (let i = 0; i < numberOfElements; i++) {
        let newDiv = document.createElement('div')
        this.boardContainer.appendChild(newDiv)
      }
      this.board = document.querySelectorAll('#tetris div')
    }

    createMatrix() {
      const newMatrix = []
      for (let i = 0; i < this.height; i++) {
        let newMatrixRaw = new Array(this.width).fill(0)
        //let newMatrixRaw = Array(...Array(this.width)).map(() => 0);
        newMatrix.push(newMatrixRaw)
      }
      this.matrix = newMatrix
    }

    index(x, y) {
      return x + y * this.width
    }

    findRandomElement() {
      let number = Math.floor(Math.random() * 9)
      this.number = number
      return this.elementTable[number]
    }

    detonateBomb() {
      const newMatrix = this.matrix
      const neightbourItems = [
        [this.positionY - 1, this.positionX - 1],
        [this.positionY - 1, this.positionX],
        [this.positionY - 1, this.positionX + 1],
        [this.positionY, this.positionX - 1],
        [this.positionY, this.positionX],
        [this.positionY, this.positionX + 1],
        [this.positionY + 1, this.positionX - 1],
        [this.positionY + 1, this.positionX],
        [this.positionY + 1, this.positionX + 1],
      ]

      neightbourItems.forEach((element) => {
        if (
          element[0] >= 0 &&
          element[0] < this.height &&
          element[1] >= 0 &&
          element[1] < this.width
        ) {
          newMatrix[element[0]][element[1]] = 0
        }
      })
      this.matrix = newMatrix
      this.colorBoard()
    }

    setStartingElement() {
      this.element = this.findRandomElement()
    }

    rotateElement() {
      const rotatedElement = []
      for (let i = 0; i < this.element[0].length; i++) {
        let rotatedElementLine = []
        for (let j = this.element.length - 1; j >= 0; j--) {
          rotatedElementLine.push(this.element[j][i])
        }
        rotatedElement.push(rotatedElementLine)
      }
      return rotatedElement
    }

    changeDirection(event) {
      switch (event.which) {
        case 37:
          if (this.positionX >= 1 && !this.checkLeftCollision()) {
            this.hideElement()
            this.positionX -= 1
            this.showElement()
          }
          break

        case 39:
          if (
            this.positionX < this.width - this.element[0].length &&
            !this.checkRightCollision()
          ) {
            this.hideElement()
            this.positionX += 1
            this.showElement()
          }
          break

        case 38:
          if (
            this.positionX <= this.width - this.element.length &&
            this.positionY <= this.height - this.element[0].length &&
            !this.checkRotatedCollision()
          ) {
            this.hideElement()
            this.element = this.rotateElement()
            this.showElement()
          }
          break

        case 40:
          clearInterval(this.idSetInterval)
          const self = this
          this.changeInt(50)
          break
      }
    }

    changeDirectionOpposite(event) {
      switch (event.which) {
        case 39:
          if (this.positionX >= 1 && !this.checkLeftCollision()) {
            this.hideElement()
            this.positionX -= 1
            this.showElement()
          }
          break

        case 37:
          if (
            this.positionX < this.width - this.element[0].length &&
            !this.checkRightCollision()
          ) {
            this.hideElement()
            this.positionX += 1
            this.showElement()
          }
          break

        case 38:
          if (
            this.positionX <= this.width - this.element.length &&
            this.positionY <= this.height - this.element[0].length &&
            !this.checkRotatedCollision()
          ) {
            this.hideElement()
            this.element = this.rotateElement()
            this.showElement()
          }
          break

        case 40:
          clearInterval(this.idSetInterval)
          const self = this
          this.changeInt(50)
          break
      }
    }

    checkRotatedCollision() {
      let rotated = this.rotateElement()
      for (let j = rotated.length - 1; j >= 0; j--) {
        for (let i = 0; i < rotated[j].length; i++) {
          if (
            rotated[j][i] == 1 &&
            this.matrix[this.positionY + j][this.positionX + i] == 1
          ) {
            return true
          }
        }
      }
      return false
    }

    showElement() {
      for (let i = 0; i < this.element.length; i++) {
        for (let j = 0; j < this.element[i].length; j++) {
          if (this.element[i][j] == 1) {
            let element = this.index(j + this.positionX, i + this.positionY)
            if (this.number == 8) {
              this.board[element].style.backgroundColor = 'red'
            } else {
              this.board[element].style.backgroundColor = 'black'
            }
          }
        }
      }
    }

    addElementToMatrix() {
      for (let i = 0; i < this.element.length; i++) {
        for (let j = 0; j < this.element[i].length; j++) {
          if (this.element[i][j] == 1) {
            this.matrix[i + this.positionY][j + this.positionX] = 1
          }
        }
      }
    }

    hideElement() {
      for (let i = 0; i < this.element.length; i++) {
        for (let j = 0; j < this.element[i].length; j++) {
          if (this.element[i][j] == 1) {
            let element = this.index(j + this.positionX, i + this.positionY)
            this.board[element].style.backgroundColor = 'white'
          }
        }
      }
    }

    moveElement() {
      this.handleBombDescription()
      if (
        this.positionY + 1 <= this.height - this.element.length &&
        !this.checkCollisionWithMatrix()
      ) {
        this.hideElement()
        this.positionY += 1
        this.showElement()
      } else {
        if (this.positionY == 0) {
          this.isFinished = true
          this.finishGame()
        }

        if (this.number == 8) {
          this.detonateBomb()
        } else {
          this.addElementToMatrix()
        }

        this.setNewState()
      }
    }

    setNewState() {
      document.querySelector('.tetrisInfo_text').innerText = ''
      this.removeCompleteRows()
      this.positionY = 0
      this.positionX = Math.floor(this.width / 2)
      this.element = this.findRandomElement()
      this.showElement()
    }

    checkLeftCollision() {
      for (let j = this.element.length - 1; j >= 0; j--) {
        for (let i = 0; i < this.element[j].length; i++) {
          if (
            this.element[j][i] == 1 &&
            this.matrix[this.positionY + j][this.positionX + i - 1] == 1
          ) {
            return true
          }
        }
      }
      return false
    }

    checkRightCollision() {
      for (let j = this.element.length - 1; j >= 0; j--) {
        for (let i = 0; i < this.element[j].length; i++) {
          if (
            this.element[j][i] == 1 &&
            this.matrix[this.positionY + j][this.positionX + i + 1] == 1
          ) {
            return true
          }
        }
      }
      return false
    }

    checkCollisionWithMatrix() {
      for (let j = this.element.length - 1; j >= 0; j--) {
        for (let i = 0; i < this.element[0].length; i++) {
          if (
            this.element[j][i] == 1 &&
            this.matrix[this.positionY + j + 1][this.positionX + i] == 1
          ) {
            return true
          }
        }
      }
      return false
    }

    removeCompleteRows() {
      const toRemove = []
      const newMatrix = []

      for (let i = 0; i < this.matrix.length; i++) {
        let sum = this.matrix[i].reduce((prev, next) => {
          return prev + next
        })
        if (sum == this.matrix[i].length) {
          toRemove.push(1)
          let newMatrixRaw = new Array(this.width).fill(0)
          newMatrix.push(newMatrixRaw)
          this.points++
        } else {
          toRemove.push(0)
        }
      }

      let numberOfCompleteRows = toRemove.reduce((prev, next) => {
        return prev + next
      })
      if (numberOfCompleteRows > 0) {
        for (let i = 0; i < this.matrix.length; i++) {
          if (toRemove[i] == 0) {
            newMatrix.push(this.matrix[i])
          }
        }
        document.querySelector('.tetris_points').innerText =
          'Points: ' + this.points
        this.matrix = newMatrix
        this.colorBoard()
      }
    }

    colorBoard() {
      for (let i = 0; i < this.height; i++) {
        for (let j = 0; j < this.width; j++) {
          let element = this.index(j, i)
          if (this.matrix[i][j] == 1) {
            this.board[element].style.backgroundColor = 'black'
          } else {
            this.board[element].style.backgroundColor = 'white'
          }
        }
      }
    }

    startGame() {
      document.querySelector(
        '.tetris_slowDown'
      ).innerText = `Slow down (${this.slowDownTimesToUse} to use)`
      this.createBoard()
      this.createMatrix()
      this.setStartingElement()
      while (this.number == 8) {
        this.setStartingElement()
      }
      this.showElement()
      this.colorBoard()
      this.changeInt(250)
      this.handleButtons()
    }

    changeInt(val) {
      let self = this
      if (this.isFinished == false) {
        this.idSetInterval = setInterval(function () {
          self.moveElement()
          if (self.positionY == 0) {
            self.handleSlowDownButtonVisibility()
            clearInterval(self.idSetInterval)
            self.changeInt(250)
          }
        }, val)
      }
    }

    handleRotateButton() {
      const self = this
      document
        .querySelector('.tetris_rotate')
        .addEventListener('click', (e) => {
          document.querySelector('#tetris').style.transform =
            document.querySelector('#tetris').style.transform ==
            'rotate(180deg)'
              ? 'rotate(0deg)'
              : 'rotate(180deg)'
          e.target.innerText =
            document.querySelector('#tetris').style.transform ==
            'rotate(180deg)'
              ? 'Tetris rotated'
              : 'Rotate tetris'
          self.isSwitchedSideKeys =
            self.isSwitchedSideKeys == false ? true : false
        })
    }

    handleSlowDownButton() {
      const self = this
      document
        .querySelector('.tetris_slowDown')
        .addEventListener('click', (e) => {
          self.slowDownTimesToUse--
          clearInterval(self.idSetInterval)
          self.changeInt(1000)
          e.target.disabled = true
          e.target.innerText = `Slow down (${this.slowDownTimesToUse} to use)`
        })
    }

    handleSlowDownButtonVisibility() {
      if (this.slowDownTimesToUse == 0) {
        document.querySelector('.tetris_slowDown').disabled = true
      } else {
        document.querySelector('.tetris_slowDown').disabled = false
      }
    }

    handleChageKeysButton() {
      const self = this
      document.querySelector('.tetris_keys').addEventListener('click', (e) => {
        self.isSwitchedSideKeys =
          self.isSwitchedSideKeys == false ? true : false
        e.target.innerText =
          self.isSwitchedSideKeys == false
            ? 'Switch sides'
            : 'Sides are switched'
      })
    }

    handleButtons() {
      this.handleRotateButton()
      this.handleSlowDownButton()
      this.handleChageKeysButton()
      this.handleMouseOverButtons()
    }

    handleBombDescription() {
      if (this.number == 8) {
        document.querySelector('.tetrisInfo_text').innerText =
          'THE BOMB is falling. When it will reeach the surface it will detonate destroying everything in radius of 1 element'
      }
    }

    handleMouseOverButtons() {
      const btnList = [
        [
          '.tetris_rotate',
          'When clicked rotates board upside-down. Usage: unlimited',
        ],
        [
          '.tetris_keys',
          'When clicked the action of left and rught arrows are switched (left arrow moves element to the right and right arrow moves element to the left). Usage: unlimited',
        ],
        [
          '.tetris_slowDown',
          'When clicked slows down the game for dropping of single element. Can be used 4 times',
        ],
      ]
      btnList.forEach((element) => {
        document
          .querySelector(element[0])
          .addEventListener('mouseenter', () => {
            document.querySelector('.tetrisInfo_text').innerText = element[1]
          })
        document
          .querySelector(element[0])
          .addEventListener('mouseleave', () => {
            document.querySelector('.tetrisInfo_text').innerText = ''
          })
      })
    }

    finishGame() {
      clearInterval(this.idSetInterval)
      let finalDiv = document.querySelector('.finishedGame')
      document.querySelector('.tetrisContainer').style.display = 'none'
      finalDiv.style.display = 'block'
      if (this.points == 0) {
        document.querySelector('.finishedGame_points').innerText =
          "Ohh no... You haven't scored any points."
        document.querySelector('.finishedGame_text').innerText =
          'Here is your consolation prize.'
      } else {
        document.querySelector('.finishedGame_points').innerText =
          'You have scored ' + this.points + ' points.'
        document.querySelector('.finishedGame_text').innerText =
          'Here is your reward.'
      }
      document.querySelector('.finishedGame_joke').innerText = dataJoke

      if (dataJoke.length > 180) {
        document.querySelector('.finishedGame_joke').style.fontSize = '22px'
      }
    }
  }

  document.querySelector('.start_button').addEventListener('click', () => {
    document.querySelector('.start').style.display = 'none'
    document.querySelector('.introduction').style.display = 'block'
  })

  let isInappropriate = false
  let dataWhole = null
  let dataJoke = null

  const jokesTable = [
    'Chuck Norris brushes his teeth with a machine gun and flosses with a lightsaber.',
    'The only mistake that Chuck Norris has committed was when he thought he did a mistake.',
    "Chuck Norris didn't audition for walker texas ranger he made da producers audition to film his life.",
  ]

  function handleJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((resp) => resp.json())
      .then((data) => {
        dataJoke = data.value
        uglyWords.forEach((element) => {
          if (dataJoke.indexOf(element) !== -1) {
            isInappropriate = true
            let randomNumber = Math.floor(Math.random() * 3)
            dataJoke = jokesTable[randomNumber]
          }
        })
      })
      .catch((err) => {
        let randomNumber = Math.floor(Math.random() * 3)
        dataJoke = jokesTable[randomNumber]
        isInappropriate = true
      })
  }

  document
    .querySelector('.introduction_button')
    .addEventListener('click', (element) => {
      let newWidth = document.querySelector(
        '.introduction_input[name="width"]'
      ).value
      let newHeight = document.querySelector(
        '.introduction_input[name="height"]'
      ).value
      if (
        newWidth >= 10 &&
        newWidth <= 20 &&
        newHeight >= 10 &&
        newHeight <= 20
      ) {
        let userHeight = Number(newHeight)
        let userWidth = Number(newWidth)

        document.querySelector('.introduction').style.display = 'none'
        document.querySelector('.tetrisContainer').style.display = 'flex'

        let game = new Game(userWidth, userHeight)
        game.startGame()

        document.addEventListener('keydown', function (event) {
          if (game.isSwitchedSideKeys == true) {
            game.changeDirectionOpposite(event)
          } else {
            game.changeDirection(event)
          }
        })

        handleJoke()
      } else {
        document.querySelector('.introduction_message').innerText =
          'Please choose numbers between 10-20'
      }
    })
})
