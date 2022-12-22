//set up base url and
export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2209-FTB-CT-WEB-PT';

// export a function fetchAllPosts that fetches posts from api and returns an array all user posts
export const fetchAllPosts = async () => {
  try {
    const result = await fetch(`${BASE_URL}/posts`);
    const json = await result.json();
    // console.log(json.data.posts);
    return json.data.posts;
  } catch (error) {
    console.log('Issue fetching all posts:', error);
  }
}

export const createNewUser = async (username, password) => {
  fetch(`${BASE_URL}/users/register`, {
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
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// export const logIn = async{
//   try{

//   }
//   catch(error){
//     console.log("Issue creating new account", error)
//   }
// }