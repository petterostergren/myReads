import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'



class BookDetailedView extends Component {

  state = {
    bookDetailes: []
  }


  componentWillMount() {
      // Tries to find the book within our saved books
      // Else it will try to look through currentSearch to find a match
      this.props.books.filter(book => {
        const bookCollection = []
        if (book.id === this.props.id) {
          const combider = bookCollection.concat(book)
          this.setState({bookDetailes: combider})
        } else {
          this.props.searchResult.filter(book => {
            if (book.id === this.props.id){
              const combider = bookCollection.concat(book)
              this.setState({bookDetailes: combider})
            }
          })
        }
      })
  }

  componentWillUnmount() {
    this.setState({bookDetailes: []})
  }

  render() {
    return(
        <div className="bookshelf-books">
          {this.state.bookDetailes.map(book => (
          <div key="book.id">
            <div className="book-detailed">
              <img
                className="book-cover-detailed-view"
                src={
                  book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "http://dvepublishing.com/images/cover_not_available.jpg"
                }
                alt="Book Cover"
                height="290"
              />

          </div>
          <div className="book-details-heading">


            <h1 className="book-details-title">
              {book.title}
            </h1>
            <h3 className="book-details-sub-title">
              {book.subtitle}
            </h3>
            <p className="book-details-author">{book.authors ?
              book.authors.join(", ") : "No Author Given" }</p>

          </div>
          <div className="book-details-description">
            <p>{book.description}</p>
          </div>
          <div className="change-shelf">
            <BookShelfChanger
              book = {book}
              bookStateUpdated={this.props.bookStateUpdated}
            />
          </div>

        </div>





      ))}
    </div>
    )
  }
}

BookDetailedView.propTypes = {
  bookStateUpdated: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  searchResult: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired

};

export default BookDetailedView
