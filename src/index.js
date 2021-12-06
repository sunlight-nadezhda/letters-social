// import React, { Component } from 'react';
// import { render } from 'react-dom';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import React from 'react';
import { render } from 'react-dom';

class Counter extends React.Component {
  static propTypes = {
    incrementBy: PropTypes.number,
    onIncrement: PropTypes.func.isRequired
  };
  static defaultProps = {
    incrementBy: 1
  };

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState((prevState, props) => ({
      count: prevState.count + props.incrementBy
    }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onButtonClick}>++</button>
      </div>
    );
  }
}

render(
  <Counter incrementBy={1} />,
  document.getElementById('root')
);

// class ShallowMerge extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         name: 'Mark',
//         colors: {
//           favorite: ''
//         }
//       }
//     };
//     this.onButtonClick = this.onButtonClick.bind(this);
//   }
//   onButtonClick() {
//     this.setState({
//       user: {
//         colors: {
//           favorite: 'blue'
//         }
//       }
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>My favorite color is {this.state.user.colors.favorite} and my name is {this.state.user.name}</h1>
//         <button onClick={this.onButtonClick}>show the color!</button>
//       </div>
//     );
//   }
// }

// render(
//   <ShallowMerge />,
//   document.getElementById('root')
// );

// class Secret extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'top secret!'
//     };
//     this.onButtonClick = this.onButtonClick.bind(this);
//   }
//   onButtonClick() {
//     this.setState(() => ({
//       name: 'Mark'
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>My name is {this.state.name}</h1>
//         <button onClick={this.onButtonClick}>reveal the secret!</button>
//       </div>
//     );
//   }
// }

// render(
//   <Secret />,
//   document.getElementById('root')
// );

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



// const data = {
//   post: {
//     'id': 123,
//     'content': 'What we hope ever to do with ease, we must first learn to do with diligence. - Samuel Johnson',
//     'user': 'Mark Thomas',
//   },
//   comments: [
//     {
//       id: 0,
//       user: 'David',
//       content: 'Such. win.',
//     },
//     {
//       id: 1,
//       user: 'Haley',
//       content: 'Love it.',
//     },
//     {
//       id: 2,
//       user: 'Peter',
//       content: 'Who was Samuel Johnson?',
//     },
//     {
//       id: 3,
//       user: 'Mitchell',
//       content: '@Peter get off Letters and do your homework!',
//     },
//     {
//       id: 4,
//       user: 'Peter',
//       content: '@mitchell ok: P',
//     }]
// };

// const node = document.getElementById('root');
// class Post extends Component {
//   render() {
//     return (
//       <div className='post'>
//         <h2 className='postAuthor'>{this.props.user}</h2>
//         <span className='postBody'>{this.props.content}</span>
//       </div>
//     );
//   }
// }

// class Comment extends Component {
//   render() {
//     return (
//       <div className='comment'>
//         <h2 className='commentAuthor'>{this.props.user}</h2>
//         <span className='commentContent'>{this.props.content}</span>
//       </div>
//     );
//   }
// }

// class CreateComment extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       content: '',
//       user: ''
//     };
//     this.handleUserChange = this.handleUserChange.bind(this);
//     this.handleTextChange = this.handleTextChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleUserChange(event) {
//     this.setState(() => ({
//       user: event.target.value
//     }));
//   }
//   handleTextChange(event) {
//     this.setState(() => ({
//       content: event.target.value
//     }));
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     this.props.onCommentSubmit({
//       user: this.state.user.trim(),
//       content: this.state.content.trim()
//     });
//     this.setState(() => ({
//       user: '',
//       content: ''
//     }));
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className='createComment'>
//         <input
//           value={this.state.user}
//           onChange={this.handleUserChange}
//           placeholder='Your name'
//           type='text'
//         />
//         <input
//           value={this.state.content}
//           onChange={this.handleTextChange}
//           placeholder='Thoughts?'
//           type='text'
//         />
//         <button type='submit'>Post</button>
//       </form>
//     );
//   }
// }

// class CommentBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       comments: this.props.comments
//     };
//     this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
//   }
//   handleCommentSubmit(comment) {
//     const comments = this.state.comments;
//     comment.id = Date.now();
//     const newComments = comments.concat([comment]);
//     this.setState({
//       comments: newComments
//     });
//   }
//   render() {
//     return (
//       <div className='commentBox'>
//         <Post
//           id={this.props.post.id}
//           content={this.props.post.content}
//           user={this.props.post.user}
//         />
//         {this.state.comments.map(comment => (
//           <Comment
//             key={comment.id}
//             content={comment.content}
//             user={comment.user}
//           />
//         ))}
//         <CreateComment onCommentSubmit={this.handleCommentSubmit} />
//       </div>
//     );
//   }
// }

// const App = <CommentBox
//   comments={data.comments}
//   post={data.post}
// />;

// ReactDOM.render(App, node);

// Post.propTypes = {
//   user: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired
// };

// Comment.propTypes = {
//   id: PropTypes.number.isRequired,
//   content: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired
// };

// CreateComment.propTypes = {
//   onCommentSubmit: PropTypes.func.isRequired,
//   content: PropTypes.string
// };

// CommentBox.propTypes = {
//   post: PropTypes.object,
//   comments: PropTypes.arrayOf(PropTypes.object)
// };
