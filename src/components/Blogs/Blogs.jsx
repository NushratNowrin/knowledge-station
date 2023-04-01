import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='body'>
            <div className="blogs">
            {
                blogs.map(blog => 
                <Blog
                    key={blog.id}
                    blog = {blog}
                ></Blog>
                )
            }
            </div>
            <div className="sidebar">
                <Sidebar></Sidebar>
            </div>
            
        </div>
    );
};

export default Blogs;