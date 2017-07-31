import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBookContent from './ListBookContent'


class MainBookWrapper extends Component {
  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <ListBookContent
            bookStateUpdated = {this.props.bookStateUpdated}
            books = {this.props.books}
        />
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
      </div>
    )
  }
}

export default MainBookWrapper
