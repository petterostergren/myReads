import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'


class ListBooksContent extends Component {
  bookShelfLabels = [
      {title: "Currently Reading",
       label: "currentlyReading"
      },
      {
       title: "Want to Read",
       label: "wantToRead"
      },
      {
       title: "Read",
       label: "read"
      }
  ]


  render() {
    const bookShelves = []

    for (const shelf of this.bookShelfLabels)
    {bookShelves.push(
      <BookShelf
        key={shelf.label}
        books={this.props.books.filter(b => b.shelf === shelf.label)}
        bookStateUpdated={this.props.bookStateUpdated}
        shelfLabel={shelf.label}
        title={shelf.title}
      />
    )}

    return(
      <div className="list-books-content">
          {bookShelves}
      </div>
    )
  }
}


ListBooksContent.propTypes = {
  books: PropTypes.array.isRequired,
  bookStateUpdated: PropTypes.func.isRequired
};
export default ListBooksContent
