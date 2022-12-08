import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
},[])
    return (
        <div>
            <h4>{comments.email}</h4>
        </div>
    );
};

export default Comments;