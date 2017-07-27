import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MainBookWrapper from './bookComponents/MainBookWrapper'

class BooksApp extends React.Component {
  state = {
    books: []

  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({ books })
  })
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
            books={this.props.books}
          />

        )}/>
      </div>
    )
  }
}

export default BooksApp
