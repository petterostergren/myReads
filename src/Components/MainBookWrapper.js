import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ListBookContent from './ListBookContent'


function MainBookWrapper (props) {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <ListBookContent
            bookStateUpdated = {props.bookStateUpdated}
            books = {props.books}
        />
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
      </div>
    )
  }

MainBookWrapper.propTypes = {
  books: PropTypes.array.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,
};

export default MainBookWrapper
