import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'



const Book = ({book, bookStateUpdated}) => (
        <div className="book">
          <div className="book-top">
            <Link to={`/details/${book.id}`}>
              <div
                className="book-cover"
                style={{ width: 128, height: 193,
                  backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://dvepublishing.com/images/cover_not_available.jpg'})` }}>
              </div>
            </Link>
            <div className="book-shelf-changer">
            <BookShelfChanger
              book = {book}
              bookStateUpdated={bookStateUpdated}
            />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(", ") : "No Author Given" }</div>
        </div>
    )


Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,
};

export default Book
