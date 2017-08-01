import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

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
            {this.props.searchResult.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  onSearch={this.props.onSearch}
                />
            ))}
          </ol>


        </div>
      </div>
    )
  }
}

export default SearchBooks
