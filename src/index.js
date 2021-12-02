import React, { Component } from 'react';
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
        ),
        this.props.children
      )
    );
  }
}

class Comment extends Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'comment'
      },
      React.createElement(
        'h2',
        {
          className: 'commentAuthor'
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'commentContent'
          },
          this.props.content
        )
      )
    );
  }
}

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      user: ''
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
    this.setState(() => ({
      user: event.target.value
    }));
  }
  handleTextChange(event) {
    this.setState(() => ({
      content: event.target.value
    }));
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState(() => ({
      user: '',
      content: ''
    }));
  }
  render() {
    return React.createElement(
      'form',
      {
        className: 'createComment',
        onSubmit: this.handleSubmit
      },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your name',
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Thoughts?',
        value: this.state.content,
        onChange: this.handleTextChange
      }),
      React.createElement('input', {
        type: 'submit',
        value: 'Post'
      }),
    );
  }
}

const data = {
  post: {
    'id': 123,
    'content': 'What we hope ever to do with ease, we must first learn to do with diligence. - Samuel Johnson',
    'user': 'Mark Thomas',
    },
  comments: [
    {
      id: 0,
      user: 'David',
      content: 'such. win.',
    },
    {
      id: 1,
      user: 'Haley',
      content: 'Love it.',
    },
    {
      id: 2,
      user: 'Peter',
      content: 'Who was Samuel Johnson?',
    },
    {
      id: 3,
      user: 'Mitchell',
      content: '@Peter get off Letters and do your homework!',
    },
    {
      id: 4,
      user: 'Peter',
      content: '@mitchell ok: P',
    }]
  };

  const App = React.createElement(
    Post,
    {
      id: 1,
      content: ' said: This is a post!',
      user: 'Mark'
    },
    React.createElement(Comment, {
      id: 2,
      user: 'Bob',
      content: ' commented: wow! how cool!'
    }),
    React.createElement(CreateComment)
  );

  render(App, node);

Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

  Comment.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  };

  CreateComment.propTypes = {
    onCommentSubmit: PropTypes.func.isRequired,
    content: PropTypes.string
  };
