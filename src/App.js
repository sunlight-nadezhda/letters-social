import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/nav/navbar';
import Loader from './components/Loader';
import './App.css';

class App extends React.Component {
  constuctor(props) {
    // super(props);
    this.state = {
      error: null,
      loading: false,
      posts: []
    };
  }
  static propTypes = {
    children: PropTypes.node
  };
  render() {
    return (
      <div className="app">
        <Navbar />
        {/* {this.state.loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          <div className="home">
              <button className='block'>
                Load more posts
              </button>
          </div>
        )} */}
        <div className="home">
          <button className='block'>
            Load more posts
          </button>
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
