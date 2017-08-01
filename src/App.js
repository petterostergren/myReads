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

  onSearch = debounce((query) => {

    console.log("in onSearch")
    BooksAPI.search(query, 5).then((searchResult) => {
      console.log(searchResult.books)
      if (typeof searchResult.shelf !== 'undefined' && Array.isArray(searchResult)) {
        console.log(searchResult.books)
        searchResult.map((books) => {
          books.shelf = this.state.bookShelfMapping[books.id] ?
          this.state.bookShelfMapping[books.id] : 'none'
        })
        // Check if users changes searchResult
        if(this.state.searchResult !== searchResult) {
          this.setState({searchResult})

        }
      } else {

      }
    }).catch( e => console.log(e))
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
