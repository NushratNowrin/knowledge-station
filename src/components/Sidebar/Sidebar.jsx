import React from 'react';
import './Sidebar.css'

const Sidebar = (props) => {
    const titles = props.titles;
    return(
        <div className='sidebar'>
            <div className='spent-time'>
                <h4>Spent time on read : {props.spentTime}</h4>
            </div>
            <div className='bookmark-blogs'>
                <h4>Bookmark Blogs : {props.bookmarks.length}</h4>
                <div className="blogs-title">
                    {
                        titles.map(title =>
                            <h5 className='title'>{title}</h5>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;