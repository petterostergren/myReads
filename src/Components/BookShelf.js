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
              <Book
                key={book.id}
                books={book}
                bookStateUpdated={this.props.bookStateUpdated}
              />
            ))}
          </ol>
        </div>
      </div>

    )
  }
}

export default BookShelf
