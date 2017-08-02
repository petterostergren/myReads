import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { debounce } from 'lodash'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './Components/SearchBooks'
import MainBookWrapper from './Components/MainBookWrapper'

class BooksApp extends Component {
  state = {
    books: [],
    bookShelfMapping: {},
    searchResult: []

  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      const updateShelfMapping = {}
      books.map(book => updateShelfMapping[book.id] = book.shelf )
      this.setState( s => ({
        books: books,
        bookShelfMapping: updateShelfMapping
      }))
    })
  }

  // Handles bookshelf changes
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

  // Handles search request when input field is changed
  onSearch = debounce((query) => {

      BooksAPI.search(query).then((searchResults) => {
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
      </div>
    )
  }
}

export default BooksApp
