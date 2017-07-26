
import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book />
        </ol>
      </div>

    )
  }
}

export default BookShelf
