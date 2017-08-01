import React, { Component } from 'react'

class Book extends Component {
  render() {
    return(
      <li key ={this.props.books.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ width: 128, height: 193,
                backgroundImage: `url(${this.props.books.imageLinks ? this.props.books.imageLinks.thumbnail : 'http://dvepublishing.com/images/cover_not_available.jpg'})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={this.props.books.shelf}
                onChange={ (e) => {this.props.bookStateUpdated(this.props.books, e.target.value)}}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.books.title}</div>
          <div className="book-authors">{this.props.books.authors ? this.props.books.authors.join(", ") : "No Author Given" }</div>
        </div>
      </li>

    )
  }
}

export default Book
