import React, { Component } from 'react'
import PropTypes from 'prop-types'



class BookShelfChanger extends Component {

  render() {
    return(
              <select
                value={this.props.book.shelf}
                onChange={ (e) => {this.props.bookStateUpdated(this.props.book, e.target.value)}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>        
    )
  }
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  bookStateUpdated: PropTypes.func.isRequired
};

export default BookShelfChanger
