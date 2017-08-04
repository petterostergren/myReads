import React from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

const ListBooksContent = ({books, bookStateUpdated}) => (
  <div>
      <BookShelf
        key={"currentlyReading"}
        books={books.filter(b => b.shelf === "currentlyReading")}
        bookStateUpdated={bookStateUpdated}
        shelfLabel={"currentlyReading"}
        title={"Currently Reading"}
      />
      <BookShelf
        key={"wantToRead"}
        books={books.filter(b => b.shelf === "wantToRead")}
        bookStateUpdated={bookStateUpdated}
        shelfLabel={"wantToRead"}
        title={"Want to Read"}
      />
      <BookShelf
        key={"read"}
        books={books.filter(b => b.shelf === "read")}
        bookStateUpdated={bookStateUpdated}
        shelfLabel={"read"}
        title={"Read"}
      />
  </div>

)


ListBooksContent.propTypes = {
  books: PropTypes.array.isRequired,
  bookStateUpdated: PropTypes.func.isRequired,

};
export default ListBooksContent
