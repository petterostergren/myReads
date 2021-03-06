import React,{Component} from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'lodash'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks'
import MainBookWrapper from './Components/MainBookWrapper'
import BookDetailedView from './Components/BookDetailedView'

class BooksApp extends Component {
  state = {
    books: [],
    bookShelfMapping: {},
    searchResult: [],

  }

  componentDidMount(){
    // Grabs all our stored books from API
    BooksAPI.getAll().then(books => {
      const updateShelfMapping = {}

      // Makes sure to check what shelf they are assigned to in order to
      // place them correctly in our ui.
      books.map(book => updateShelfMapping[book.id] = book.shelf )
      this.setState( () => ({
        books: books,
        bookShelfMapping: updateShelfMapping
      }))
    })
  }

  /**
  * @description Updates the bookshelf and sends change to BookAPI
  * @param {object} book - Selected book
  * @param {string} change - Value that was changed to
  */
  bookStateUpdated = (book, change) => {
    book.shelf = change


    const updateShelfMapping = this.state.bookShelfMapping
    updateShelfMapping[book.id] = book.shelf

    this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ]),
        bookShelfMapping : updateShelfMapping
      }))
    BooksAPI.update(book, change)
  }


  /**
  * @description Sends a API Req. To see if seatched word matches any books
  * @param {string} query - Search string
  */
  onSearch = debounce((query) => {

      BooksAPI.search(query).then((searchResults) => {
        // Validate that now errors was found.
        if (!searchResults || searchResults.error){
          this.setState({searchResult : []})
          return searchResults
        } else if (Array.isArray(searchResults)) {

            searchResults.map((book) => {
              book.shelf = this.state.bookShelfMapping[book.id] ?
              this.state.bookShelfMapping[book.id] : 'none'
              return searchResults

            })

            if (this.state.searchResults !== searchResults) {

              this.setState({searchResult : searchResults})

            }
        } })
        .catch(e => console.log(e))
    }, 300)


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainBookWrapper
            bookStateUpdated = {this.bookStateUpdated}
            books = {this.state.books}
          />

        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            searchResult = {this.state.searchResult}
            onSearch = {this.onSearch}
            bookStateUpdated = {this.bookStateUpdated}


          />

        )}/>
        <Route exact path="/details/:id" render={({match}) => (
          <BookDetailedView
            bookStateUpdated = {this.bookStateUpdated}
            id={match.params.id}
          />


        )}/>
      </div>
    )
  }
}

export default BooksApp
