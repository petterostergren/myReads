## MyReads
This is an application that lets you keep track of your interest in books.

Would you like to read a book, remember what you reading at the moment or keep track on what you have already read?

## Installation

First of you need to grab a copy of this repository.

Place your self in a directory where you want the cloned directory to end up and then.


    $ git clone https://github.com/petterostergren/myReads.git
    $ cd myReads
    $ npm install
    $ npm start


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Known Issues

* When `BookDetailedView` is reloaded but never left. The state gets lost and just displays a white-page

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
