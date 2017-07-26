import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MainBookWrapper from './bookComponents/MainBookWrapper'

class BooksApp extends React.Component {
  state = {
    
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

          />

        )}/>
      </div>
    )
  }
}

export default BooksApp
