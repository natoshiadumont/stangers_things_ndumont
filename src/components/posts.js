import { fetchAllPosts, getUser, deletePost, messageSeller } from "../api"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Posts = ({ authenticated }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('');
  const [search, setSearch] = useState('');
  const [message, setMessage] = useState('')
  useEffect(() => {
    fetchAllPosts().then((results) => { setPosts(results) });
    getUser().then((results) => { setUser(results.username) });
  }, []);

  // console.log(posts);
  return (
    <div className="post-container">
      <div>
        <form id="search-bar" onSubmit={(event) => {
          event.preventDefault();
          // console.log(event.target.value);
        }}>
          <label htmlFor="Search"></label>
          <input 
          type="text" placeholder="Type here to search for a post..."
          id="search-field"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          ></input>
          {localStorage.getItem('myToken') ?
            <Link to="/new-post">
              <img id="new-post-icon" src="https://cdn-icons-png.flaticon.com/512/753/753317.png">
              </img>
            </Link>
            : null}
        </form>
      </div>

      <div id="all-posts">

        {posts.filter((currentPost) => {
            
            if(search === ''){
              return currentPost;
              // console.log('empty string search works!')          
                      }
            else if(
            currentPost.title.toLowerCase().includes(search.toLowerCase())
            || currentPost.price.toLowerCase().includes(search.toLowerCase())
            || currentPost.description.toLowerCase().includes(search.toLowerCase())
            || currentPost.location.toLowerCase().includes(search.toLowerCase())
            || currentPost.author.username.toLowerCase().includes(search.toLowerCase())
            ){
              return currentPost;
            }
                    }).map((post, index) => {
          return (
            <div className="post" key={index}>
              <h2>{post.title}</h2>
              <h5>Price: {post.price}</h5>

              <p className="description">{post.description}</p>
              <h5> Willing to Deliver?: {post.willDeliver ? "Yes" : 'No'}</h5>
              <div>Location: {post.location}</div>

              <p>Seller: {post.author.username}</p>
              <h6>Posted: {
                new Date(post.createdAt).toLocaleString({ timeStyle: 'short' })
              } </h6>

              {authenticated ?
                <div id="post-options">
                  {post.author.username === user ?
                    <>
                      <button className="delete-post">
                        <img className="delete-post-icon" src="https://cdn-icons-png.flaticon.com/512/3606/3606795.png"
                          onClick={async (event) => {
                            try {
                              if (window.confirm('You are about to delete a post! Press "OK" to continue.')) {
                                await deletePost(post._id);
                                await fetchAllPosts();
                                location.reload();
                              }


                            } catch (error) {
                              console.error(error);
                            }

                          }
                          }
                        />
                      </button>
                    </>
                    : <div id="message-seller-container">
                      <form  id="message-seller-form"
                       onSubmit={async (event) => {
                        event.preventDefault();
                        try{
                            let postID = await post._id;
                            console.log(message, postID);
                            messageSeller(message, postID);
                            document.getElementById('message-content').reset();
                        }catch(error){
                          console.error(error);
                        }
                      
                          }
                          }
                      >
                        <input id="message-content" required type="text" 
                        placeholder="Type a message to the seller here..."
                        onChange={(event)=>{
                          setMessage(event.target.value);
                        }}
                        ></input>
                        <input id="submit-message" type="image" 
                        name="submit" 
                        src="https://cdn-icons-png.flaticon.com/512/7718/7718904.png"
                        alt="submit"
                         
                        ></input>
                      </form>

                    </div>
                  }


                </div> : null}
            </div>
          )
        })
        }
      </div>
    </div>
  )
}
