import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'



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
                onMouseEnter={() => {this.onMouseEnter()}}
                onMouseLeave={() => {this.onMouseLeave()}}
                style={{ width: 128, height: 193,
                  backgroundImage: `url(${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'http://dvepublishing.com/images/cover_not_available.jpg'})` }}>

                  {/*
                    Creates a overlay ontop of the book cover to
                    guide the user on where to find more information  
                  */}
                  {this.state.isHovered ? (
                    <div className="hover-box"></div>) :
                  (
                    <div />
                  )}
                  </div>
            </Link>
            <div className="book-shelf-changer">
            <BookShelfChanger
              book = {this.props.book}
              bookStateUpdated={this.props.bookStateUpdated}
            />
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
