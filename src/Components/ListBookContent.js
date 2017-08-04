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

    return(
      <div className="list-books-content">
          {this.bookShelfLabels.map((value) => (
            <BookShelf
              key={value.label}
              books={this.props.books.filter(b => b.shelf === value.label)}
              bookStateUpdated={this.props.bookStateUpdated}
              shelfLabel={value.label}
              title={value.title}
            />
          ))}
      </div>
    )
  }
}


ListBooksContent.propTypes = {
  books: PropTypes.array.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,

};
export default ListBooksContent
