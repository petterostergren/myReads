import React from 'react'
import PropTypes from 'prop-types'


const BookShelfChanger = ({book, bookStateUpdated}) => (
    <select
      value={book.shelf}
      onChange={ (e) => {bookStateUpdated(book, e.target.value)}}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )


BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  bookStateUpdated: PropTypes.func.isRequired
};

export default BookShelfChanger
