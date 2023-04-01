import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read : </h4>
            </div>
            <div className='bookmark-blogs'>
                <h4>Bookmark Blogs : </h4>
            </div>
        </div>
    );
};

export default Sidebar;