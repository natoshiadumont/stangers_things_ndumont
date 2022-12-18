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
