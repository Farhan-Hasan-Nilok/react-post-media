import React, { useState } from 'react';
import { useEffect } from 'react';
import './Post.css';
import * as BiIcons from 'react-icons/bi';
const Post = (props) => {
    const {userId, body} = props.postData;

    const [user, setUser] = useState([]);

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
                <p href='*'><BiIcons.BiLike></BiIcons.BiLike></p>
                <p href='*'><BiIcons.BiCommentDetail></BiIcons.BiCommentDetail></p>
                <p href='*'><BiIcons.BiShare></BiIcons.BiShare></p>
            </div>
        </div>
    );
};

export default Post;