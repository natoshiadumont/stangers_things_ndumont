
export const Profile = () => {
  return (
    <div className="content-container">
      <h1>Profile</h1>

    <div>Create a New Post:
    <form>
      <label for='item-title' placeholder="In a few words, what are you selling?">Title:</label>
      <input type='text' id='post-title'></input>

      <label for='item-description'>Description</label>
      <input type='text' id='description' placeholder='Type specifice details about what you are selling'></input>
    
    </form>

    </div>
    </div>
  )
}