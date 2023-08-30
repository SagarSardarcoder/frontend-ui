import React, { useState } from 'react';
import "./landing.css"


const ChatComponent = ({ users }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };
    return (
        <div className={`chatContainer ${isChatOpen ? 'open' : ''}`}>
            <div className="chatButton" onClick={toggleChat}>
                <span className="chatIcon">💬 Chat</span>
                <span className="toggleIcon">{isChatOpen ? '▼' : '▲'}</span>
            </div>
            <div className="userList">
                {users.map((user) => (
                    <div className="Chatuser" key={user.id}>
                        <img id='userImg' src={user.profilepicture} alt="img" />
                        {user.name}
                        <span className={`statusDot ${user.online ? 'online' : 'offline'}`} />
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatComponent;
