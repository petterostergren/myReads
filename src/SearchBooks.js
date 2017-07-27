import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import Book from './bookComponents/Book'


class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query : ""
  }

  updateQuery = (query) => {
    this.setState({ query })
    this.onBookSearch(query)
  }


  onBookSearch = (query) => {
    if(query) {
      {
        BooksAPI.search(query).then((response) => {
          if(response) {
            response.map((response) => {
              //TODO: Check if we have any books in our list
              //TODO: Check if user change state on current books or
              //TODO: Adds a newbook.
              //TODO: Add debouncer
            })
          } else {
            //TODO: Handle errors
          }
        })
      }
    } else {
      this.setState({ query : ""})
    };
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
              onChange={(e) => {this.updateQuery(e.target.value)}}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">


          </ol>


        </div>
      </div>
    )
  }
}

export default SearchBooks
