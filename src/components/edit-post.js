import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { newPost } from "../api";

export const NewPost = () => {
  //create the following setters/getters: title, price, description, seller, deliver, location

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [deliver, setDeliver] = useState(false);
  const history = useHistory();

  return (
    <div className="register-container">
      <h1>Create a Post!</h1>
      <div>
        <form id="create-post-form"
          onSubmit={async (event) => {

            event.preventDefault();

            try {
              const post = await newPost(title, description, price, location, deliver);
              // localStorage.setItem('myToken', );
              history.push("/posts");
              return post;
              
            }
            catch (error) {
              console.error('Having trouble creating a new post:', error);
            }
          }}>
          <label htmlFor='item-title' >Title:</label>
          <input required type='text'
            id='item-title'
            placeholder="In a few words, what are you selling?"
            value={title}
            onChange={
              (event) => {
                setTitle(event.target.value);
              }
            }></input>

          <label htmlFor='item-price' >Price:</label>
          <input required
            type='text'
            id='item-price'
            placeholder="How much are you selling your item for?"
            value={price}
            onChange={
              (event) => {
                setPrice(event.target.value);
              }}>
          </input>

          <label htmlFor='item-description'>Description</label>
          <textarea id="item-description"
           required placeholder='Type specific details about what you are selling'
               value={description}
            onChange={
              (event) => {
                setDescription(event.target.value);
              }}
              >
           </textarea>

          <label htmlFor='item-location'>Item Location</label>
          <input type='text' 
          id='item-location' 
          placeholder="city/state/country"
            value={location}
            onChange={
              (event) => {
                  setLocation(event.target.value);
                  return;
              }}
          ></input>
           

          <label htmlFor="will-deliver">Are you willing to deliver?</label>
          <select required id="will-deliver" name="cars"
          value={deliver}
          onChange={
            (event) => {
              setDeliver(event.target.value);
              event.target.value === 'no' ? false: true;
            }}>
            <option default value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          <input id="submit-post" type="submit" value="Submit Post"></input>
        </form>
      </div>
    </div>
  )
}