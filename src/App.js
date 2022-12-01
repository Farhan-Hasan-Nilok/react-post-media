import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Components/Post/Post';
function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])
  return (
    <div className="App">
      <Router>
        <Sidebar></Sidebar>
      </Router>
      {
        post.map(postData => <Post postData = {postData}></Post>)
      }
    </div>
  );
}

export default App;
