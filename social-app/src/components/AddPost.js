import React, { useState } from 'react';


function AddPosts({ setPosts }) {
  let [postObj, setPostObj] = useState({});


  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    setPostObj(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = e => {
    e.preventDefault();
    setPosts(prev => [...prev, postObj]);
  };


  return (
    <div className='center'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="image"
          placeholder="Image"
        />{' '}
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="post"
          placeholder="Post"
        />
        <button type="submit">Share!</button>
      </form>
    </div>
  );
}


export default AddPosts;