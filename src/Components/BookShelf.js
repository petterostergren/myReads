import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {


  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.id}>
                <Book
                  key={book.id}
                  book={book}
                  bookStateUpdated={this.props.bookStateUpdated}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default BookShelf
