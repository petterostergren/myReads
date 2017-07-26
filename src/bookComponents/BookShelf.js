import React, { Component } from 'react'
import BookShelfBooks from './BookShelfBooks'


class BookShelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
          <BookShelfBooks />
      </div>

    )
  }
}

export default BookShelf
