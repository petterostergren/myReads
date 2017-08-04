import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'



class BookDetailedView extends Component {

  state = {
    bookDetailes: {}
  }


  componentDidMount() {
    BooksAPI.get(this.props.id).then(bookDetailes => {
        this.setState({bookDetailes})
      })
    }


  componentWillUnmount() {
    this.setState({bookDetailes: {}})
  }


  render() {
    const {bookDetailes} = this.state

    return(
        <div className="bookshelf-books">
          <div>
            <div className="book-detailed">
              <img
                className="book-cover-detailed-view"
                src={
                  bookDetailes.imageLinks
                    ? bookDetailes.imageLinks.thumbnail
                    : "http://dvepublishing.com/images/cover_not_available.jpg"
                }
                alt="Book Cover"
                height="290"
              />

            </div>
            <div className="book-details-heading">


              <h1 className="book-details-title">
                {bookDetailes.title}
              </h1>
              <h3 className="book-details-sub-title">
                {bookDetailes.subtitle}
              </h3>
              <p className="book-details-author">{bookDetailes.authors ?
                bookDetailes.authors.join(", ") : "No Author Given" }</p>

            </div>
            <div className="book-details-description">
              <p>{bookDetailes.description}</p>
            </div>
            <div className="change-shelf">
              <BookShelfChanger
                book = {bookDetailes}
                bookStateUpdated={this.props.bookStateUpdated}
              />
            </div>
          </div>
        </div>
      )
    }
}

BookDetailedView.propTypes = {
  bookStateUpdated: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired

};

export default BookDetailedView
