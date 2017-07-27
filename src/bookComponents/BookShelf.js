import React, { Component } from 'react'
import BookShelfBooks from './BookShelfBooks'
import PropTypes from 'prop-types'


class BookShelf extends Component {
  static propTypes = {
    shelfTitle: PropTypes.string.isRequired
  }
  
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <BookShelfBooks />
      </div>

    )
  }
}

export default BookShelf
