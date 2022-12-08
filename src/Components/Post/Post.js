import React, { useState } from 'react';
import { useEffect } from 'react';
import './Post.css';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Post = (props) => {
    const {userId, body} = props.postData;

    const [user, setUser] = useState([]);

    const[likeColor, setLikeColor] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div className='post-body'>
            <h6><strong>{user.name}</strong></h6>
            <p className = 'user-name'><small>@{user.username}</small></p>
            <p>{body}</p>
            <div className='reaction'>
               <IoIcons.IoMdThumbsUp onClick={() => setLikeColor(likeColor ? '' : 'blue')} color = {likeColor}></IoIcons.IoMdThumbsUp>
                {/* <Link to={`/comments/${userId}`}><BiIcons.BiCommentDetail></BiIcons.BiCommentDetail></Link> */}
                <BiIcons.BiCommentDetail></BiIcons.BiCommentDetail>
                <BiIcons.BiShare></BiIcons.BiShare>
            </div>
        </div>
    );
};

export default Post;