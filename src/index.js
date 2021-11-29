import React, {Component} from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const node = document.getElementById('root');
class Post extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'post'
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody'
          },
          this.props.content
        )
      )
    );
  }
}

// const root = React.createElement(
//   "div",
//   {},
//   React.createElement(
//     "h1",
//     {},
//     "Hello, world!",
//     React.createElement(
//       "a",
//       { href: "mailto:mark@ifelse.io" },
//       React.createElement("h1", {}, "React In Action"),
//       React.createElement("em", {}, "...and now it really is!")
//     )
//   )
// );

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

const App = React.createElement(Post, {
  id: 1,
  content: ' said: This is a post!',
  user: 'Mark'
});

render(App, node);
