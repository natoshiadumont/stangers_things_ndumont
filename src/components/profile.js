import React, { useState, useEffect } from "react"
import { getUser } from "../api";

export const Profile = ({ authenticated }) => {

  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getUser().then((results) => { setUser(results.username) });
    getUser().then((results) => { setMessages(results.messages) });
    console.log(messages);
  }, []);

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      {authenticated ?
        <>
                  <div id="recieved">Recieved Messages:</div>
          {messages.map((message, index) => {
              if (message.fromUser.username !== user) {
                return (
                
                    <div key={index} className="messages-container">

                      <div id="message-title">Message related to "{message.post.title}" post:</div>
                      <div id="message-content">You sent: "{message.content}"</div>

                    </div> 
              )
            }
            }
          )}
          <div id="sent">Sent Messages:
            {messages.map((message, index) => {
              if (message.fromUser.username === user) {
                return (
                
                    <div key={index} className="messages-container">

                      <div id="message-title">Message related to "{message.post.title}" post:</div>
                      <div id="message-content">You sent: "{message.content}"</div>

                    </div> 
              )
            }
            }
          )}
          </div>
        </>
        : <div>You must be logged into an account to view profile details.</div>}
    </div>
  )
}