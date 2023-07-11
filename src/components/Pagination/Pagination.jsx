import React from 'react'
import './Pagination.css'

export class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      pagesNumber: this.props.pagesNumber,
      offset: 3,
      paginationMaxSize: 1,
      paginationActualSize: this.props.pagesNumber,
      paginationInitialNumber: 1,
    }
  }

  componentWillMount() {
    this.calculatePagerSizes()
  }

  componentDidMount() {
    let paginationParams = {
      page: this.state.page,
      paginationActualSize: this.state.paginationActualSize,
      paginationInitialNumber: this.state.paginationInitialNumber,
    }

    this.createPagination(paginationParams)
    this.props.handleListUpdate(this.state.page)
  }

  // zmienic - to ma byc do listy
  static getDerivedStateFromProps(props, state) {
    if (props.pageNumber !== state.pageNumber) {
      return { ...state, pageNumber: props.pageNumber }
    } else {
      return null
    }
  }

  componentDidUpdate() {
    let paginationParams = {
      page: this.state.page,
      paginationActualSize: this.state.pagesNumber,
      paginationInitialNumber: this.state.paginationInitialNumber,
    }

    this.createPagination(paginationParams)
    //this.props.handleListUpdate(this.state.page)
  }

  createPaginationExactSizes(inputSizes) {
    let paginationMaxSize = 2 * Number(inputSizes.offset) + 1
    let paginationActualSize =
      paginationMaxSize > Number(inputSizes.pagesNumber)
        ? Number(inputSizes.pagesNumber)
        : paginationMaxSize

    let paginationInitialNumber = 1

    if (
      inputSizes.page - inputSizes.offset <= 0 ||
      inputSizes.page + inputSizes.offset > inputSizes.pagesNumber
    ) {
      if (inputSizes.page - inputSizes.offset <= 0) {
        paginationInitialNumber = 1
      }

      if (inputSizes.page + inputSizes.offset > inputSizes.pagesNumber) {
        paginationInitialNumber =
          Number(inputSizes.pagesNumber) - paginationActualSize + 1
      }
    } else {
      paginationInitialNumber = inputSizes.page - inputSizes.offset
    }

    let partialSizes = {
      paginationMaxSize: paginationMaxSize,
      paginationActualSize: paginationActualSize,
      paginationInitialNumber: paginationInitialNumber,
    }

    return partialSizes
  }

  calculatePagerSizes() {
    let initialInputs = {
      page: this.state.page,
      pagesNumber: this.state.pagesNumber,
      offset: this.state.offset,
    }

    let partialSizes = this.createPaginationExactSizes(initialInputs)

    this.setState({
      page: initialInputs.page,
      pagesNumber: initialInputs.pagesNumber,
      offset: initialInputs.offset,
      paginationMaxSize: partialSizes.paginationMaxSize,
      paginationActualSize: partialSizes.paginationActualSize,
      paginationInitialNumber: partialSizes.paginationInitialNumber,
    })
  }

  changePagination(e) {
    let newPage = Number(e.target.innerText)

    let startingParameters = {
      page: newPage,
      pagesNumber: this.state.pagesNumber,
      offset: this.state.offset,
    }
    let partialSizes = this.createPaginationExactSizes(startingParameters)

    this.setState(
      {
        page: newPage,
        pagesNumber: this.state.pagesNumber,
        offset: this.state.offset,
        paginationMaxSize: partialSizes.paginationMaxSize,
        paginationActualSize: partialSizes.paginationActualSize,
        paginationInitialNumber: partialSizes.paginationInitialNumber,
      },
      function () {
        let divs = document.querySelectorAll('.pagination__page')
        divs.forEach((element) => (element.className = 'pagination__page'))

        let paginationParams = {
          page: newPage,
          paginationActualSize: partialSizes.paginationActualSize,
          paginationInitialNumber: partialSizes.paginationInitialNumber,
        }
        this.createPagination(paginationParams)
        this.props.handleListUpdate(newPage)
      }
    )
    // this.props.setCurrentPage(newPage)
  }

  createPagination(paginationParams) {
    let container = document.querySelector('.pagination__paginator-container')
    container.innerHTML = ''
    let self = this
    for (let i = 0; i < paginationParams.paginationActualSize; i++) {
      let pagerItem = document.createElement('button')
      container.append(pagerItem)
      pagerItem.innerText = i + paginationParams.paginationInitialNumber
      pagerItem.className =
        i + paginationParams.paginationInitialNumber === paginationParams.page
          ? 'pagination__page pagination__page--active'
          : 'pagination__page'
      pagerItem.id = 'pager-' + (i + paginationParams.paginationInitialNumber)
      pagerItem.addEventListener('click', function (e) {
        self.changePagination(e)
      })
    }
  }

  handlePageInput(event) {
    let pagesStartingParams = {}
    pagesStartingParams.page =
      event.target.name === 'page'
        ? Number(event.target.value)
        : this.state.page
    pagesStartingParams.pagesNumber =
      event.target.name === 'pagesNumber'
        ? Number(event.target.value)
        : this.state.pagesNumber
    pagesStartingParams.offset =
      event.target.name === 'offset'
        ? Number(event.target.value)
        : this.state.offset

    // code below prevents user from typing to hight values of page and offset when compared to pagesNumber
    // without the code no page is displayed (no div) and also there is no error in the console
    // usage of this code depends on expectations of component behaviour
    if (pagesStartingParams.page > pagesStartingParams.pagesNumber) {
      pagesStartingParams.page = pagesStartingParams.pagesNumber
    }
    if (
      pagesStartingParams.offset >
      Math.floor(pagesStartingParams.pagesNumber / 2)
    ) {
      pagesStartingParams.offset = Math.floor(
        pagesStartingParams.pagesNumber / 2
      )
    }

    let isPageNumberChanged = event.target.name === 'pagesNumber'
    let partialSizes = this.createPaginationExactSizes(pagesStartingParams)

    this.setState(
      {
        page: pagesStartingParams.page,
        pagesNumber: pagesStartingParams.pagesNumber,
        offset: pagesStartingParams.offset,
        paginationMaxSize: partialSizes.paginationMaxSize,
        paginationActualSize: partialSizes.paginationActualSize,
        paginationInitialNumber: partialSizes.paginationInitialNumber,
      },
      function () {
        let pagesInitialParams = {
          page: pagesStartingParams.page,
          pagesNumber: pagesStartingParams.pagesNumber,
        }
        if (isPageNumberChanged) {
          //this.createPages(pagesInitialParams)
        }
        let divs = document.querySelectorAll('.pagination__page')
        divs.forEach((element) => (element.className = 'pagination__page'))
        let paginationParams = {
          page: pagesStartingParams.page,
          paginationActualSize: partialSizes.paginationActualSize,
          paginationInitialNumber: partialSizes.paginationInitialNumber,
        }
        this.createPagination(paginationParams)
        this.props.handleListUpdate(pagesStartingParams.page)
      }
    )
  }

  render() {
    return (
      <div>
        <div className="pagination__paginator-container"></div>
        <form className="pagination__inputs">
          <label>
            Strona
            <input
              name="page"
              type="number"
              placeholder="Wybierz stronę"
              value={this.state.page}
              onChange={this.handlePageInput.bind(this)}
              min="1"
              max={this.state.pagesNumber}
            />
          </label>
          <span>z</span>
          <label aria-label="liczba stron">
            <input
              name="pagesNumber"
              type="number"
              placeholder="Liczba stron"
              value={this.state.pagesNumber}
              onChange={this.handlePageInput.bind(this)}
              min="1"
            />
          </label>
          <label>
            Offset
            <input
              name="offset"
              type="number"
              placeholder="Offset:"
              value={this.state.offset}
              onChange={this.handlePageInput.bind(this)}
              min="0"
              max={Math.floor(this.state.pagesNumber / 2)}
            />
          </label>
        </form>
      </div>
    )
  }
}
