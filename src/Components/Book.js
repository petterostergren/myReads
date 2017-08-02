import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'



class Book extends Component {
  state = {
    isHovered: false,
  }

  onMouseEnter = () => {
    this.setState({isHovered: true})


  }

  onMouseLeave = () => {
    this.setState({isHovered : false})

  }


  render() {
    return(
        <div className="book">
          <div className="book-top">
            <Link to={`/details/${this.props.book.id}`}>
              <div
                className="book-cover"
                onMouseEnter={(currentBook) => {this.onMouseEnter()
                  currentBook = this.props.book
                  this.setState({detailedBook: currentBook}) }}
                onMouseLeave={(currentBook) => {this.onMouseLeave(),
                  currentBook = this.props.book
                  this.setState({detailedBook: ""})}}
                style={{ width: 128, height: 193,
                  backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'http://dvepublishing.com/images/cover_not_available.jpg'})` }}>
                  {this.state.isHovered ? (
                    <div className="hover-box"></div>) :
                  (
                    <div />
                  )}
                  </div>
            </Link>
            <div className="book-shelf-changer">
              <select
                value={this.props.book.shelf}
                onChange={ (e) => {this.props.bookStateUpdated(this.props.book, e.target.value)}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(", ") : "No Author Given" }</div>
        </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,
};

export default Book
