import React, { Component } from 'react'
import BookShelf from './BookShelf'


class ListBooksContent extends Component {
  render() {
    return(
      <div className="list-books-content">
          <BookShelf shelfTitle={"Currently Reading"}/>
          <BookShelf shelfTitle="Want to read"/>
          <BookShelf shelfTitle="Read"/>
      </div>

    )
  }
}

export default ListBooksContent
