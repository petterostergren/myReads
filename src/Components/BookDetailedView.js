import React, { Component } from 'react'

import PropTypes from 'prop-types'
import Book from './Book'

class BookDetailedView extends Component {





  render() {
    const currentBook = (this.props.books.filter(book => (
      book.id === this.props.id)
    ))

    const currentSearch = (this.props.books.filter(book => (
      book.id === this.props.id)
    ))
    // TODO : if currentSearch or if currentBook


    return(
        <div className="bookshelf-books">

          {currentBook.map(book => (

          <article key="book.id" className="book-details">
          <section className="book-cover-details">
            <img
              src={
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "http://dvepublishing.com/images/cover_not_available.jpg"
              }
              alt="Book Cover"
              width="192"
              height="290"
            />
            <div className="book-shelf-changer book-shelf-changer-details">
              <select
                value={book.shelf}
                onChange={e => {
                  this.props.handleBookListChange(book, e.target.value);
                }}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </section>
          <section className="book-details-heading">
            <h1 className="book-details-title">
              {book.title}
            </h1>

            <p>By</p>
            {book.authors &&
              book.authors.map(author =>
                <p key={book.id} className="book-details-author">
                  {book.author}
                </p>
              )}
          </section>
          <p className="book-details-description">
            {book.description}
          </p>
        </article>




            ))}


        </div>
    )
  }
}

BookDetailedView.propTypes = {
  bookStateUpdated: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired

};

export default BookDetailedView
