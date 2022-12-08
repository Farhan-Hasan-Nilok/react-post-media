import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import Post from './Components/Post/Post';
import Comments from './Components/Comments/Comments';
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
        <Routes>
          <Route path='/' element = {<Sidebar/>}></Route>
          <Route path='/comments/:postId' element = {<Comments/>}></Route>
        </Routes>
      </Router>
      {
        post.map(postData => <Post postData = {postData}></Post>)
      }
    </div>
  );
}

export default App;
