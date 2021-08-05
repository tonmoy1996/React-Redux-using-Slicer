import React, { useEffect } from 'react';
import axios from 'axios';
import { addPost, selectPost } from "./PostSlice";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPost);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log('====================================');
            console.log(data);
            console.log('====================================');
            dispatch(addPost(data));
        }
        fetchPost();
    }, []);
    return (
        <div>
            <h4>All Post</h4>
            {posts.length > 0 && <div>
                {posts.map(post => (
                    <p>{post.title}</p>
                ))}
            </div>}

        </div>
    );
}

export default Post;
