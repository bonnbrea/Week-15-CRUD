import AddComment from './AddComment';
import React from 'react';
import LikeButton from './LikeButton';


function SocialPages({ posts, setPosts }) {
  let showSocialPage = posts.map((post, i) => {       
    let comments;
    if (post.comments) {
      comments = post.comments.map((comment, i) => {
        return (
          <p>
            {comment.text}
          </p>
        );
      });
    }
   
    return (
      <div className='post' key={i}>
        <h1>{post.name}</h1>
        <img style={{ width: '300px' }} src={post.image} />
        <h3>Post: {post.post}</h3>                                                
       
        {posts.comments ? { comments } : null}
        <LikeButton />
        <AddComment />


      </div>
    );
  });


  return (
    <div className= "center">
      {showSocialPage}
    </div>
  );
}
export default SocialPages;