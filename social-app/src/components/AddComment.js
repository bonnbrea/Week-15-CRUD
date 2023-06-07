import React, { useState } from 'react';



let initialComments=[]  //data for comments stored here




  function AddComment() {
    let [comment,setComment] = useState("");
    const [comments, setComments] =useState(initialComments);
  const handleSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, comment]);
   
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Leave a comment
        <br>
        </br>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <input type="submit" />
      <div>{
      comments.map((comment, i) => {
        return (
          <div className='textc'key={comment}>
          <p>
            {comment}
          </p>
          <br>
          </br>
          <button className='button' onClick={() => {setComments(comments.filter(c => c != comment));}}>Delete Comment</button>
        </div>
        );
      })
    }</div>
    </form>
  )
}
  export default AddComment;