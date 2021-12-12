import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Navbar from './components/nav/navbar';
import Loader from './components/Loader';
import Post from './components/post/Post';
import './App.css';
import data from './utils/data.json';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    console.log(data);
    setPosts(posts => posts.concat(data));
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : (
          <div className="home">
            <div></div>
            <div>
              {posts.length && (
                <div className="posts">
                  {posts.map((post, index) => {
                    return <Post key={index} user={post.user} post={post} />;
                  })}
                </div>
              )}
              <button className='block' onClick={getPosts}>
                Load more posts
              </button>
            </div>
            <div></div>
        </div>
      )}
    </div>
  );
};

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

App.propTypes = {
  children: PropTypes.node
};

export default App;
