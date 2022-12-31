//set up base url and
export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT';

// export a function fetchAllPosts that fetches posts from api and returns an array all user posts
export const fetchAllPosts = async () => {
  try {
    const result = await fetch(`${BASE_URL}/posts`);
    const json = await result.json();
    // console.log(json.data.posts);
    // console.log(json.data.posts);
    return json.data.posts;
  } catch (error) {
    console.log('Issue fetching all posts:', error);
  }
}

export const createNewUser = async (username, password) => {
  let result = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  });
  let json = await result.json();
  localStorage.setItem('myToken', json.data.token);
  return json.data.token;
}


export const logIn = async (username, password) => {

  const result = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: username,
        password: password
      }
    })
  });
  const json = await result.json();
  localStorage.setItem('myToken', json.data.token);
  return json.data.token;
}


export const newPost = async (title, description, price, location, willDeliver) => {

  const result = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('myToken')}`
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        willDeliver: willDeliver
      }
    })
  })
  const json = await result.json();
  // console.log(json.data)
  return json;
}

//function getUser to access messages, autor id, and specific user posts

export const getUser = async () => {
  const result = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('myToken')}`
    },
  })

  const json = await result.json();
  // console.log(json.data)
  return json.data;
}


export const deletePost = async (postID) => {
  
  const result = await fetch(`${BASE_URL}/posts/${postID}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('myToken')}`
    }
  })
  const json = await result.json();
  return json;
}

//having issue messaging
export const messageSeller = async (content, postID) => {
  const result = await fetch(`${BASE_URL}/posts/${postID}/messages`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('myToken')}`
    },
    body: JSON.stringify({
      message: {
        content: content
      }
    })
  })

  const json = await result.json();
  console.log(result);
  return json;
};