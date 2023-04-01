import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [readmarks, setReadmarks] = useState(0);
    const [titles, setTitles] = useState([]);
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    let title = [];
    const handleBookmark = (blog) =>{
        const newBookmark = [...bookmarks, blog];
        setBookmarks(newBookmark);
        const title = blog.title;
        const newTitle = [...titles, title]
        setTitles(newTitle);
    }
    const handleMarkAsRead = (time) => {
        console.log(readmarks);
        const newTime = parseInt(readmarks) + time;
        setReadmarks(newTime);
    }
    return (
        <div className='body'>
            <div className="blogs">
            {
                blogs.map(blog => 
                <Blog
                    key={blog.id}
                    blog = {blog}
                    handleBookmark = {handleBookmark}
                    handleMarkAsRead = {handleMarkAsRead}
                ></Blog>
                )
            }
            </div>
            <div className="sidebar">
                <Sidebar
                    bookmarks = {bookmarks}
                    spentTime = {readmarks}
                    titles = {titles}
                ></Sidebar>
            </div>
            
        </div>
    );
};

export default Blogs;