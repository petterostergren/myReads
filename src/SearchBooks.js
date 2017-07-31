import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './bookComponents/Book'




class SearchBooks extends Component {

  state = {
    query : '',
  }


  updateQuery = (query) => {
      this.setState({ query })
    }


  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
            type="text"
            value={this.state.query}
            onChange={(e) => {
              this.updateQuery(e.target.value)
              this.props.onSearch(e.target.value)
            }}
            placeholder="Search by title or author"
            />
          </div>

        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResults.map((book) => {
              <Book
                bookStateUpdated={this.props.bookStateUpdated}
              />
            })}


          </ol>


        </div>
      </div>
    )
  }
}

export default SearchBooks
