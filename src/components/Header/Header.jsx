import React from 'react';
import './Header.css'
import image from '../../assets/images/propic.jpg'

const Header = () => {
    return (
        <div>
        <div className='header'>
            <h2>Knowledge Station</h2>
            <div className='navbar'>
                <li><a href="/home">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
            </div>

            <div className='image'>
                <img src={image} alt="" />
            </div>
        </div>
        <div className='mobile-navbar'>
                
                <li><a href="/home">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/about">About</a></li>
                
            </div>
        <hr />
        </div>

    );
};

export default Header;