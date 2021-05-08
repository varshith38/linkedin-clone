import React from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import  EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"></input>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption 
                    color="#70B5F9"
                    Icon={ImageIcon}
                    title="Photo"/>
                    <InputOption 
                    color="#70B5F9"
                    Icon={SubscriptionsIcon}
                    title="Video"/>
                    <InputOption 
                    color="#70B5F9"
                    Icon={EventNoteIcon}
                    title="Event"/>
                    <InputOption 
                    color="#70B5F9"
                    Icon={CalendarViewDayIcon}
                    title="Photo"/>
                </div>
            </div>
        </div>
    )
}

export default Feed
