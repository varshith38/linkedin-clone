import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'

function Sidebar() {
    
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                # 
            </span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg" />
                <Avatar className="sidebar__Avatar"/>
                <h2>sample name</h2>
                <h4>Description</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,534</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,999</p>
                </div> 
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('React.js')}
                {recentItem('UI Development')}
                {recentItem('Redux')}
                {recentItem('REST API')}
            </div>
        </div>
    )
}

export default Sidebar
