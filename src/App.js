import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MainBookWrapper from './bookComponents/MainBookWrapper'

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

  bookStateUpdated = (book, change) => {
    book.shelf = change

    const updateShelfMapping = this.state.bookShelfMapping
    updateShelfMapping[book.id] = book.shelf

    this.setState(state => ({
      books: state.books.filter(b => b.id !== book.id).concat([book]),
      bookShelfMapping: updateShelfMapping
    }))
    BooksAPI.update(book, change)
  }

  onSearch = (query) => {
    BooksAPI.search(query).then((searchResult) => {
      if (Array.isArray(searchResult)) {
        searchResult.map((books) => {
          books.shelf = this.state.bookShelfMapping[books.id] ?
          this.state.bookShelfMapping[books.id] : 'none'
        })
        // Check if users changes searchResult
        if(this.state.searchResult !== searchResult) {
          this.setState({searchResult})

        }
      } else {
        this.setState({searchResults: []})
      }
    }).catch( e => console.log(e))
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainBookWrapper


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
