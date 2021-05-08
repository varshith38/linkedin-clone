import React from 'react'
import './HeaderOption.css';
import {Avatar} from '@material-ui/core';

function HeaderOption({avatar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__Icon" />}
            {avatar && <Avatar className="headerOption_Icon" src={avatar} /> }
            <h3 className="headerOption_Title">{title}</h3>
        </div>
    )
}

export default HeaderOption
