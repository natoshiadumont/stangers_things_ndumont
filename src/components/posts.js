import { fetchAllPosts } from "../api"
import React, {useState, useEffect} from "react";

export const Posts =() => {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    fetchAllPosts().then((results)=>{setPosts(results)});
  }, []);

  // console.log(posts);
  return (
    <div id="post-container">
          {posts.map((post, index)=> {
      return(
        <div className="post" key={index}>
          <h2>{post.title}</h2>
          <h4>Price: {post.price}</h4>
          <p>Seller: {post.author.username}</p>
          <p className="description">{post.description}</p>
          <div> Willing to Deliver?: {post.willDeliver ? "Yes" : 'No'}</div>
          <div>Location: {post.location}</div>
        </div>
      )
    })
    }
    </div>
  )
}
