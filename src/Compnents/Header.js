import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption 
                title="Home"
                Icon={HomeIcon}/>
                <HeaderOption 
                title="My Network"
                Icon={SupervisorAccountIcon}/>
                <HeaderOption 
                title="Jobs"
                Icon={BusinessCenterIcon}/>
                <HeaderOption 
                title="Messaging"
                Icon={ChatIcon}/>
                <HeaderOption 
                title="Notifications"
                Icon={NotificationsIcon}/>
                <HeaderOption
                title="Me"
                avatar=""
                />
            </div>
        </div>
    )
}

export default Header
