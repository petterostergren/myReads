import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'



const BookShelf = ({ title, books, bookStateUpdated }) => (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  bookStateUpdated={bookStateUpdated}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

    )



BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,
};

export default BookShelf
